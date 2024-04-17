import { PluginDefinition, setupPluginServer } from 'connery';
import sendEmail from './actions/sendEmail.js';

const pluginDefinition: PluginDefinition = {
  title: 'Gmail',
  description: 'A plugin that contains actions to work with Gmail.',
  actions: [sendEmail],
  configurationParameters: [
    {
      key: 'gmailEmailAddress',
      title: 'Gmail email address',
      description: 'Gmail email address to login with and send emails from.',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'gmailAppPassword',
      title: 'Gmail app password',
      description:
        'Since Gmail does not allow to login with a password, you need to create an app password for your Gmail account. See https://support.google.com/accounts/answer/185833?hl=en for more information.',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'senderName',
      title: 'Sender name',
      description: 'The name of the sender that will appear in the email.',
      type: 'string',
      validation: {
        required: true,
      },
    },
  ],
  maintainers: [
    {
      name: 'Connery',
      email: 'support@connery.io',
    },
  ],
};

const handler = await setupPluginServer(pluginDefinition);
export default handler;
