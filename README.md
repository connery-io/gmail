# Gmail

"Gmail" plugin for Connery.

## Available actions

| Action                                   | Description                                                         |
| ---------------------------------------- | ------------------------------------------------------------------- |
| [[Send email](/src/actions/sendEmail.ts) | Send an email to the recipient with the specified subject and body. |

## Repository structure

The entry point for this plugin is the [./src/index.ts](/src/index.ts) file.
It contains the plugin definition and references to all the actions.

The [./src/actions/](/src/actions/) folder contains all the actions this plugin defines.
Every action is represented by a separate file with the action definition and implementation.

The [./dist/plugin.js](/dist/plugin.js) file is the bundled version of the plugin with all the dependencies.
Connery Platform uses this file to run the plugin.

## Connery

This repository is a plugin for [Connery](https://connery.io).

Connery is an open-source plugin ecosystem for AI and No-Code.

Learn more about Connery:

- [Documentation](https://docs.connery.io)
- [Source code](https://github.com/connery-io/connery)
- [A quick guide on how to start using this plugin with Connery](https://docs.connery.io/docs/quick-start)

## Support

If you have any questions or need help with this plugin, please create an issue in this repository.
