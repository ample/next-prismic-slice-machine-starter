# Ample's NEXT.js Starter

This starter serves as the starting point for Ample [NEXT.js](https://nextjs.org/) development projects. It has pre-configured preferences to make getting started less cumbersome. To create a new project from this template, click the green "Use this Template" button above.

## Prerequisite

_Install [VOLTA](https://volta.sh/)_

```shell
curl https://get.volta.sh | bash && volta install node && volta install yarn@1
```

## Getting started

### Development

```shell
cd next-starter-ample
```

_Install node packages_

```shell
yarn
```

_Start the development server ([http://localhost:3000](http://localhost:3000))_

```shell
yarn develop
```

### Storybook

[Storybook](https://storybook.js.org/) is used for documentation, development, and visual testing.

_Start the storybook server ([http://localhost:6006](http://localhost:6006))_

```shell
yarn storybook
```

## Documentation

### Alias Imports

This project supports alias imports. This provides a means for importing components without needing to know exactly where you are in the tree. It can make moving items around a little less painful.

The convention is to treat directories in our project like [NPM scopes](https://docs.npmjs.com/about-scopes). The scope is to prepend with a `@` character. There are several prefixes supported out of the box:

- `@components` maps to `./components`
- `@content` maps to `./content`
- `@layout` maps to `./layout`
- `@root` maps to `./`
- `@templates` maps to `./templates`
- `@utilities` maps to `./utilities`

Unfortunately, for seamless integration across the board, we have to configure aliases for every place in which we're going to use them, which means _at least_ NEXT.js, Storybook, Jest, and VS Code. Therefore, they are replicated (with the appropriate syntax) in:

- `.config/.jest/jest.config.js`
- `.config/.storybook/main.js`
- `jsconfig.json`

If you wish to add a custom alias to your project, touch all appropriate config files.

### Linters

It's recommended to set up seamless integration with your editor.

- [ESLint](http://eslint.org/) statically analyzes your code to find problems in JavaScript quickly. ([editor-integration](http://eslint.org/docs/user-guide/integrations#editors))
- [Prettier](https://prettier.io) enforces a code formatting style guide for consistency across the team. ([editor-integration](https://prettier.io/docs/en/editors.html)\)
- [Stylelint](https://stylelint.io) helps avoid errors and enforces conventions in styles. ([editor-integration](https://stylelint.io/user-guide/complementary-tools/#editor-plugins)\)

> Note: For an optimal development experience in VS Code install recommended workspace extensions.
> When using VS Code, most ESLint and Stylelint conventions will be fixed automatically.

Linters run `pre-commit` on staged files to ensure there are no errors or warnings.

### License

next-starter-ample is distributed under the [MIT License](LICENSE.md).
