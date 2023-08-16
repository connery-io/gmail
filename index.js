const SendEmail = require("./actions/SendEmail.js");

module.exports = {
    title: 'Gmail',
    description: 'Gmail connector for Connery',
    actions: [
        SendEmail,
    ],
    configurationParameters: [
        {
            key: 'GmailEmailAddress',
            title: 'Gmail email address',
            description: 'Gmail email address to login with and send emails from',
            type: 'string',
            validation: {
                required: true
            }
        },
        {
            key: 'GmailAppPassword',
            title: 'Gmail app password',
            description: 'Since Gmail does not allow to login with a password, you need to create an app password for your Gmail account. See https://support.google.com/accounts/answer/185833?hl=en for more information.',
            type: 'string',
            validation: {
                required: true
            }
        },
        {
            key: 'SenderName',
            title: 'Sender name',
            description: 'The name of the sender that will appear in the email',
            type: 'string'
        }
    ],
    maintainers: [
        {
            name: 'Connery',
            email: 'support@connery.io',
        }
    ],
    connery: {
        runnerVersion: '0',
    }
};
