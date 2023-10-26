import { AbstractPluginFactory, Plugin } from '@connery-io/sdk';
import SendEmail from './actions/SendEmail';

export default class PluginFactory extends AbstractPluginFactory {
  public async GetPlugin(): Promise<Plugin> {
    return {
      Title: 'Gmail',
      Description: 'Gmail plugin for Connery',
      Actions: [SendEmail],
      ConfigurationParameters: [
        {
          Key: 'GmailEmailAddress',
          Title: 'Gmail email address',
          Description: 'Gmail email address to login with and send emails from.',
          Type: 'string',
          Validation: {
            Required: true,
          },
        },
        {
          Key: 'GmailAppPassword',
          Title: 'Gmail app password',
          Description:
            'Since Gmail does not allow to login with a password, you need to create an app password for your Gmail account. See https://support.google.com/accounts/answer/185833?hl=en for more information.',
          Type: 'string',
          Validation: {
            Required: true,
          },
        },
        {
          Key: 'SenderName',
          Title: 'Sender name',
          Description: 'The name of the sender that will appear in the email.',
          Type: 'string',
          Validation: {
            Required: true,
          },
        },
      ],
      Maintainers: [
        {
          Name: 'Connery',
          Email: 'support@connery.io',
        },
      ],
      Connery: {
        RunnerVersion: '0',
      },
    };
  }
}