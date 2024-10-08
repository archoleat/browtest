# Browtest

![ESM](https://img.shields.io/badge/ESM-fe0)
![CodeQL](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/codeql.yaml?label=CodeQL)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/eslint.yaml?label=ESLint)
![Remark](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/remark.yaml?label=Remark)

## Table of Contents

- [Installation](#installation)
- [Settings](#settings)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository.

1. Run `pnpm init` for install dependencies.

1. Change the **url** address in the `playwright.config.ts` file
   if necessary.

1. Start the local server with `vite`, `wepback` or `next`

1. After all steps start **Browtest**.

   > [**Learn more**](#scripts) about the available modes.

## Settings

In `playwright.config.ts` the minimum settings are set,
for more serious testing we advise you to use **Chrome**, **Edge**, **Firefox**
or **Safari**.

In the `src/shared/spec-settings.ts` you can change the path
to the **main directory** and enable or disable **devtools** for
all tests you run.

> By default, **devtools** are turned off.

## Scripts

- `init`: Installs dependencies, **Husky**, **Playwright**.

- `screenshot:desktop:all`: Creates screenshots for all desktop browsers.

  > Screenshots are saved at
  > `spec-results/screenshots/{browserName}-{dateNow}.png.`

- `safari:desktop`: Runs **desktop Safari**.

- `safari:mobile`: Runs **mobile Safari**.

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
