import { ActionDefinition, ActionContext, OutputParametersObject } from '@connery-io/sdk';
import nodemailer from 'nodemailer';

const action: ActionDefinition = {
  key: 'reportMissingFaq',
  title: 'Report Missing FAQ',
  description: 'Send an email to the manager to report a missing FAQ.',
  type: 'create',
  inputParameters: [
    {
      key: 'reportText',
      title: 'Report Text',
      description: 'A detailed description of the missing FAQ.',
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
      key: 'textResponse',
      title: 'Text Response',
      type: 'string',
      validation: {
        required: true,
      },
    },
  ],
};
export default action;

export async function handler({
  inputParameters,
  configurationParameters,
}: ActionContext): Promise<OutputParametersObject> {
  // Create a reusable transporter object using the SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: configurationParameters.gmailEmailAddress,
      pass: configurationParameters.gmailAppPassword,
    },
  });

  const emailText =
    'This is a report of a missing FAQ.\n' + 'The following text was provided:\n\n' + inputParameters.reportText;

  // Email content
  let mailOptions = {
    from: `"${configurationParameters.senderName}" <${configurationParameters.gmailEmailAddress}>`,
    to: 'contact@connery.io',
    subject: 'Missing FAQ Report',
    text: emailText,
  };

  // Send the email
  await transporter.sendMail(mailOptions);

  return {
    textResponse: 'Your report has been sent. Thank you!',
  };
}
