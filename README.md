# Browtest

![CodeQL](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/codeql.yaml?label=CodeQL)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/eslint.yaml?label=ESLint)
![Markdown](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/markdown.yaml?label=Markdown)
![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)

## Table of Contents

-   [Installation](#installation)
-   [Settings](#settings)
-   [Scripts](#scripts)
-   [Troubleshooting](#troubleshooting)
-   [Contributing](#contributing)
-   [License](#license)

## Installation

1.  Clone the repository.

1.  Run `pnpm init` for install dependencies.

1.  Change the **url** address in the `playwright.config.ts` file
    if necessary.

1.  Start the local server with `vite`, `wepback` or `next`

1.  After all steps start **Browtest**.

    > [**Learn more**](#scripts) about the available modes.

## Settings

In `playwright.config.ts` the minimum settings are set,
for more serious testing we advise you to use **Chrome**, **Edge**, **Firefox**
or **Safari**.

In the `src/spec-settings.ts` you can change the path
to the **main directory** and enable or disable **devtools** for
all tests you run.

> By default, **devtools** are turned off.

## Scripts

-   `init`: Installs dependencies, **Husky**, **Playwright**
    and update submodules.

-   `test:safari:desktop`: Runs **desktop Safari**.

-   `test:safari:mobile`: Runs **mobile Safari**.

-   `test:firefox:desktop`: Runs **desktop Firefox**.

-   `test:chrome:desktop`: Runs **desktop Chrome**.

-   `test:chrome:mobile`: Runs **mobile Chrome**.

-   `test:multiple:desktop`: Runs all desktop browsers in parallel.

-   `test:multiple:mobile`: Runs all mobile browsers in parallel.

-   `test:all`: Runs all tests from **desktop/** and **mobile/** folders.

-   `screenshot:desktop:all`: Creates screenshots for all desktop browsers.

    > Screenshots are saved at
    > `test-results/screenshots/{browserName}-{dateNow}.png.`

## Troubleshooting

> \[!WARNING]
> Developers Only.

If you are using **npm**, you may get a `peerDependency` error
that is related to these plugins:

-   `typescript-eslint/eslint-plugin`.
-   `typescript-eslint/parser`.

To fix this you can switch to **pnpm**(recommended) or install version `6.0.0`:

```shell
typescript-eslint/eslint-plugin@6.0.0
```

```shell
typescript-eslint/parser@6.0.0
```

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
