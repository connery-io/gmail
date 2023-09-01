const nodemailer = require("nodemailer");

module.exports = {
  key: "SendEmail",
  title: "Send email",
  description: "",
  type: "create",
  inputParameters: [
    {
      key: "Recipient",
      title: "Email Recipient",
      description: "Email address of the email recipient",
      type: "string",
      validation: {
        required: true,
      },
    },
    {
      key: "Subject",
      title: "Email Subject",
      description: "Subject of the email",
      type: "string",
      validation: {
        required: true,
      },
    },
    {
      key: "Body",
      title: "Email Body",
      description: "Body of the email",
      type: "string",
      validation: {
        required: true,
      },
    },
  ],
  operation: {
    type: "js",
    handler,
  },
  outputParameters: [
    {
      key: "MessageId",
      title: "Message ID",
      type: "string",
      validation: {
        required: true,
      },
    },
  ],
};

async function handler({ inputParameters, configurationParameters }) {
  // Create a reusable transporter object using the SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: configurationParameters.GmailEmailAddress,
      pass: configurationParameters.GmailAppPassword,
    },
  });

  // Email content
  let mailOptions = {
    from: `"${configurationParameters.SenderName}" <${configurationParameters.GmailEmailAddress}>`,
    to: inputParameters.Recipient,
    subject: inputParameters.Subject,
    text: inputParameters.Body,
  };

  // Send the email
  const result = await transporter.sendMail(mailOptions);

  return {
    MessageId: result.messageId,
    ExtraParameter: "123"
  };
}
