# Browtest

![CodeQL](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/codeql.yaml?label=CodeQL)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/eslint.yaml?label=ESLint)
![Markdown](https://img.shields.io/github/actions/workflow/status/archoleat/browtest/markdown.yaml?label=Markdown)
![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)
![TS Only](https://img.shields.io/badge/TS-only-gray?labelColor=06f)

> Make cross-browser checking more convenient!

## Table of Contents

-   [Getting Started](#getting-started)
-   [Settings](#settings)
-   [Features](#features)
-   [Scripts](#scripts)
-   [Contributing](#contributing)
-   [License](#license)

## Getting Started

1.  Clone the repository.

1.  Install dependencies.

1.  Change the **url** address in the `playwright.config.ts` file
    if necessary.

1.  Start the local server.

1.  After all steps start **Browtest**.

    > [**Learn more**](#scripts) about the available modes.

## Settings

In `playwright.config.ts` the minimum settings are set,
for more serious testing we advise you to use **Chrome**, **Edge**, **Firefox**
and **Safari**.

In the `src/spec-settings.ts` you can change the path
to the **main directory** and enable or disable **devtools** for
all tests you run.

> By default, **devtools** are turned off.

## Features

You can run browsers not only one at a time but several at once
with **multiple** mode, [**learn more**](#scripts)
about the available modes.

Testing is available in (**WebKit**) Safari, (**Gecko**) Firefox and
(**Chromium**) Edge and Chrome and their mobile versions.

> \[!WARNING]
> **There is no support for mobile Firefox in playwright!**

## Scripts

-   `init`: Installs dependencies, **Husky**, **Playwright**
    and update submodules.

-   `test:safari:desktop`: Runs **desktop Safari**.

-   `test:safari:mobile`: Runs **mobile Safari**.

-   `test:firefox:desktop`: Runs **desktop Firefox**.

-   `test:chrome:desktop`: Runs **desktop Chrome**.

-   `test:chrome:mobile`: Runs **mobile Chrome**.

-   `test:multiple:desktop`: Runs all desktop browsers from
    **specs/desktop/** folder in parallel.

-   `test:multiple:mobile`: Runs all mobile browsers from
    **specs/mobile/** folder in parallel.

-   `test:all`: Runs all tests from **desktop/** and **mobile/** folders.

-   `screenshot:all`: Creates screenshots for all desktop browsers.

    > Screenshots are saved at
    > `test-results/screenshots/{browserEngineName}-{dateNow}.png.`

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
