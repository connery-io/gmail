import { ActionDefinition, ActionContext, OutputParametersObject } from '@connery-io/sdk';
import nodemailer from 'nodemailer';

const action: ActionDefinition = {
  key: 'sendEmail',
  title: 'Send email',
  description: 'Send an email to the recipient with the specified subject and body.',
  type: 'create',
  inputParameters: [
    {
      key: 'recipient',
      title: 'Email Recipient',
      description: 'Email address of the email recipient.',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'subject',
      title: 'Email Subject',
      description: 'Subject of the email.',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'body',
      title: 'Email Body',
      description: 'Body of the email.',
      type: 'string',
      validation: {
        required: true,
      },
    },
  ],
  operation: {
    handler: handler,
  },
  outputParameters: [
    {
      key: 'messageId',
      title: 'Message ID',
      type: 'string',
      validation: {
        required: true,
      },
    },
  ],
};

export default action;

async function handler({ inputParameters, configurationParameters }: ActionContext): Promise<OutputParametersObject> {
  // wait 3 seconds for testing purposes
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Create a reusable transporter object using the SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: configurationParameters.gmailEmailAddress,
      pass: configurationParameters.gmailAppPassword,
    },
  });

  // Email content
  let mailOptions = {
    from: `"${configurationParameters.senderName}" <${configurationParameters.gmailEmailAddress}>`,
    to: inputParameters.recipient,
    subject: inputParameters.subject,
    text: inputParameters.body,
  };

  // Send the email
  const result = await transporter.sendMail(mailOptions);

  return {
    messageId: result.messageId,
  };
}
