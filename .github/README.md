# Ample's NEXT.js starter configured with Prismic Slice Machine

[![Netlify Status](https://api.netlify.com/api/v1/badges/31b3a6ce-906f-4cb9-9fc4-5d08f4658b30/deploy-status)](https://app.netlify.com/sites/ample-next-slicemachine-stater/deploys)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://main--62746dd9a57ceb004a509ac4.chromatic.com) ![Percy](https://percy.io/static/images/percy-badge.svg)

This starter serves as the starting point for Ample [NEXT.js](https://nextjs.org/) development projects that use [Prismic's Slice Machine](https://prismic.io/docs/core-concepts/slice-machine). It has pre-configured preferences to make getting started less cumbersome. To create a new project from this template, click the green "Use this Template" button above.

_Ample's Next.js starter can be found [here](https://github.com/ample/next-starter-ample)._

## Prerequisite

_Install [VOLTA](https://volta.sh/)_

```shell
curl https://get.volta.sh | bash && volta install node && volta install yarn@1
```

## Getting started

```shell
cd next-prismic-slice-machine-starter-ample
```

Install node packages

```shell
yarn
```

Start the development server ([http://localhost:3000](http://localhost:3000))

```shell
yarn develop
```

## Storybook and Chromatic

[Storybook](https://storybook.js.org/) is used for documentation, development, and visual testing.

_Start the storybook server ([http://localhost:6006](http://localhost:6006))_

```shell
yarn storybook
```

[Chromatic](https://www.chromatic.com/) is used for gathering UI feedback, visual testing, and publishing Storybook.

> Storybook stories are pushed to Chromatic with Github actions in each PR.

_To push to Chromatic locally, use the following command:_

```shell
yarn chromatic
```

## Testing

[Percy](https://percy.io/) is used for visual testing, [Jest](https://jestjs.io/) for Unit Testing, and [Storyshots](https://storybook.js.org/addons/@storybook/addon-storyshots) for automating Jest Snapshots on Storybook Stories.

**Percy Visual testing (with Cypress)**

> Percy tests run `pre-push`, and visual snapshots can be reviewed on the project's dashboard at [percy.io](https://percy.io/).

_To test Percy locally, open Cypress and pick a browser:_

```shell
yarn cypress:open
```

**Jest**

```shell
yarn test
```

_To update failing snapshots, run the following command_

```shell
yarn test:update
```

## Documentation

### Alias Imports

This project supports alias imports. This provides a means for importing components without needing to know exactly where you are in the tree. It can make moving items around a little less painful.

The convention is to treat directories in our project like [NPM scopes](https://docs.npmjs.com/about-scopes). The scope is to prepend with a `@` character. There are several prefixes supported out of the box:

- `@components` maps to `./components`
- `@layout` maps to `./layout`
- `@root` maps to `./`
- `@slices` maps to `./slices`
- `@templates` maps to `./templates`
- `@utilities` maps to `./utilities`

Aliases need to be configured in NEXT.js, Storybook, Jest, and VS Code for seamless integration across the board. Therefore, they are replicated (with the appropriate syntax) in:

- `.config/.jest/jest.config.js`
- `.config/.storybook/main.js`
- `jsconfig.json`

### Linters

It's recommended to set up seamless integration with your editor.

- [ESLint](http://eslint.org/) statically analyzes your code to find problems in JavaScript quickly. ([editor-integration](http://eslint.org/docs/user-guide/integrations#editors))
- [Prettier](https://prettier.io) enforces a code formatting style guide for consistency across the team. ([editor-integration](https://prettier.io/docs/en/editors.html)\)
- [Stylelint](https://stylelint.io) helps avoid errors and enforces conventions in styles. ([editor-integration](https://stylelint.io/user-guide/complementary-tools/#editor-plugins)\)

> Note: For an optimal development experience in VS Code install recommended workspace extensions.
> When using VS Code, most ESLint and Stylelint conventions will be fixed automatically.

Linters run `pre-commit` on staged files to ensure there are no errors or warnings.

> _Additional documentation for this project can be found in Storybook._

## Environment variables

[direnv](https://direnv.net/) is used to load and unload environment variables.

Create a `.envrc` file in the root directory and add the following project environment variables.

```bash
export CHROMATIC_PROJECT_TOKEN="chromatic-project-token-goes-here"
export NEXT_PUBLIC_SITE_URL="http://localhost:3000"
export PERCY_TOKEN="percy-token-goes-here"
```

### License

next-starter-ample is distributed under the [MIT License](LICENSE.md).
