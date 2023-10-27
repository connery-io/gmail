import { Action, ActionContext, OutputParametersObject } from '@connery-io/sdk';
import nodemailer from 'nodemailer';

const action: Action = {
  Key: 'SendEmail',
  Title: 'Send email',
  Description: 'Send an email to the recipient with the specified subject and body.',
  Type: 'create',
  InputParameters: [
    {
      Key: 'Recipient',
      Title: 'Email Recipient',
      Description: 'Email address of the email recipient.',
      Type: 'string',
      Validation: {
        Required: true,
      },
    },
    {
      Key: 'Subject',
      Title: 'Email Subject',
      Description: 'Subject of the email.',
      Type: 'string',
      Validation: {
        Required: true,
      },
    },
    {
      Key: 'Body',
      Title: 'Email Body',
      Description: 'Body of the email.',
      Type: 'string',
      Validation: {
        Required: true,
      },
    },
  ],
  Operation: {
    Handler: handler,
  },
  OutputParameters: [
    {
      Key: 'MessageId',
      Title: 'Message ID',
      Type: 'string',
      Validation: {
        Required: true,
      },
    },
  ],
};

export default action;

async function handler({ InputParameters, ConfigurationParameters }: ActionContext): Promise<OutputParametersObject> {
  // Create a reusable transporter object using the SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: ConfigurationParameters.GmailEmailAddress,
      pass: ConfigurationParameters.GmailAppPassword,
    },
  });

  // Email content
  let mailOptions = {
    from: `"${ConfigurationParameters.SenderName}" <${ConfigurationParameters.GmailEmailAddress}>`,
    to: InputParameters.Recipient,
    subject: InputParameters.Subject,
    text: InputParameters.Body,
  };

  // Send the email
  const result = await transporter.sendMail(mailOptions);

  return {
    MessageId: result.messageId,
  };
}
