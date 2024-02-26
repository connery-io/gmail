import { PluginDefinition, startPluginServer } from '@connery-io/sdk';
import sendEmail from './actions/sendEmail.js';

const pluginDefinition: PluginDefinition = {
  title: 'Gmail',
  description: 'Gmail plugin for Connery',
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
export default pluginDefinition;

startPluginServer(pluginDefinition);
