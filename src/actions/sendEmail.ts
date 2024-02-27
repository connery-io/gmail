import { ActionDefinition, ActionContext, OutputObject } from 'connery';
import nodemailer from 'nodemailer';

const actionDefinition: ActionDefinition = {
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
export default actionDefinition;

export async function handler({ input, configuration }: ActionContext): Promise<OutputObject> {
  // Create a reusable transporter object using the SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: configuration.gmailEmailAddress,
      pass: configuration.gmailAppPassword,
    },
  });

  // Email content
  let mailOptions = {
    from: `"${configuration.senderName}" <${configuration.gmailEmailAddress}>`,
    to: input.recipient,
    subject: input.subject,
    text: input.body,
  };

  // Send the email
  const result = await transporter.sendMail(mailOptions);

  return {
    messageId: result.messageId,
  };
}
