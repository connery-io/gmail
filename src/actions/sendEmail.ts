import { ActionDefinition, ActionContext, OutputObject } from 'connery';
import nodemailer from 'nodemailer';

const actionDefinition: ActionDefinition = {
  key: 'sendEmail',
  name: 'Send email',
  description: 'Send an email to the recipient with the specified subject and body.',
  type: 'create',
  inputParameters: [
    {
      key: 'gmailEmailAddress',
      name: 'Gmail email address',
      description: 'Gmail email address to login with and send emails from.',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'gmailAppPassword',
      name: 'Gmail app password',
      description:
        'Since Gmail does not allow to login with a password, you need to create an app password for your Gmail account. See https://support.google.com/accounts/answer/185833?hl=en for more information.',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'senderName',
      name: 'Sender name',
      description: 'The name of the sender that will appear in the email.',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'recipient',
      name: 'Email Recipient',
      description: 'Email address of the email recipient.',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'subject',
      name: 'Email Subject',
      description: 'Subject of the email.',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'body',
      name: 'Email Body',
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
  outputParameters: [],
};
export default actionDefinition;

export async function handler({ input }: ActionContext): Promise<OutputObject> {
  // Create a reusable transporter object using the SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: input.gmailEmailAddress,
      pass: input.gmailAppPassword,
    },
  });

  // Email content
  let mailOptions = {
    from: `"${input.senderName}" <${input.gmailEmailAddress}>`,
    to: input.recipient,
    subject: input.subject,
    text: input.body,
  };

  // Send the email
  await transporter.sendMail(mailOptions);

  return {};
}
