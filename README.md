# Browtest

![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)
![TypeScript Only](https://img.shields.io/badge/TypeScript-only-gray?labelColor=06f)
![CodeQL](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/browtest/codeql.yml?label=CodeQL)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/browtest/editorconfig.yml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/browtest/prettier.yml?label=Prettier)
![Markdown](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/browtest/markdown.yml?label=Markdown)
![ESLint](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/browtest/eslint.yml?label=ESLint)

## Table of Contents

-   [Browtest](#browtest)
    -   [Table of Contents](#table-of-contents)
    -   [**Make cross-browser checking more convenient!**](#make-cross-browser-checking-more-convenient)
    -   [Getting Started](#getting-started)
    -   [Features](#features)
    -   [Package.json scripts](#packagejson-scripts)
    -   [Settings](#settings)
    -   [Husky](#husky)
    -   [Authors](#authors)
    -   [Contributors](#contributors)
    -   [Contributing](#contributing)
    -   [Versioning](#versioning)
    -   [License](#license)
    -   [Acknowledgments](#acknowledgments)

## **Make cross-browser checking more convenient!**

This project is built on [**Playwright**](https://github.com/microsoft/playwright)
and [**Conqueror Repo Template**](https://github.com/Conqueror-Site-Builder/conqueror-repo-template).

> \[!TIP]
> Nice addition for [**Conqueror**](https://github.com/Conqueror-Site-Builder/conqueror)
> or [**Conqueror Repo Template**](https://github.com/Conqueror-Site-Builder/conqueror-repo-template)!

## Getting Started

1.  Clone the repository.

1.  Install dependencies.

1.  Change the **url** address in the **`playwright.config.ts`** file
    if necessary.

1.  Start the local server.

1.  After all steps start **Browtest**.

    > [**Learn more**](#packagejson-scripts) about the available modes.

## Features

You can run browsers not only one at a time but several at once
with **multiple** mode, [**learn more**](#packagejson-scripts)
about the available modes.

Testing is available in (**WebKit**) Safari, (**Gecko**) Firefox and
(**Chromium**) Edge and Chrome and their mobile versions.

> \[!WARNING]
> **There is no support for mobile Firefox in playwright!**

## Package.json scripts

-   **`init`**: Installs dependencies, **Husky** and **Playwright**.

-   **`test:safari:desktop`**: Runs **desktop Safari**.

-   **`test:safari:mobile`**: Runs **mobile Safari**.

-   **`test:firefox:desktop`**: Runs **desktop Firefox**.

-   **`test:chrome:desktop`**: Runs **desktop Chrome**.

-   **`test:chrome:mobile`**: Runs **mobile Chrome**.

-   **`test:multiple:desktop`**: Runs all desktop browsers from
    **specs/desktop/** folder in parallel.

-   **`test:multiple:mobile`**: Runs all mobile browsers from
    **specs/mobile/** folder in parallel.

-   **`test:all`**: Runs all tests from **desktop/** and **mobile/** folders.

-   **`screenshot:all`**: Creates screenshots for all desktop browsers.

    > Screenshots are saved at
    > `test-results/screenshots/{browserEngineName}-{dateNow}.png.`

-   **`fix:prettier`**: Runs **`Prettier`** with the **`--write`** flag.

    > In the [`prettier.yml`](https://github.com/Conqueror-Site-Builder/browtest/blob/main/.github/workflows/prettier.yml)
    > workflow, **`prettier`** is run with the **`--check`** flag.
    >
    > Also run with a **`pre-commit`** hook.

-   **`lint:editorconfig`**: Runs **`Editorconfig Checker`** and
    checks all files in the project.

    > Also runs with the [**`editorconfig.yml`**](https://github.com/Conqueror-Site-Builder/browtest/blob/main/.github/workflows/editorconfig.yml)
    > workflow.

-   **`lint:markdown`**: Runs **`Remark`** with the **`--quiet`** flag and
    checks all markdown files.

    > Also runs with the [**`markdown.yml`**](https://github.com/Conqueror-Site-Builder/browtest/blob/main/.github/workflows/markdown.yml)
    > workflow.

-   **`lint:ts`**: Runs **`ESLint`** with the flag **`--fix`**
    for all **TypeScript** files.

    > Also runs with the [**`eslint.yml`**](https://github.com/Conqueror-Site-Builder/browtest/blob/main/.github/workflows/eslint.yml)
    > workflow.

-   **`commit`**: Runs **`Commitizen`**, **`Commitlint`**, and **`Husky`** to
    create commits according to **Conventional Commits** standards.

## Settings

In **`playwright.config.ts`** the minimum settings are set,
for more serious testing we advise you to use **Chrome**, **Edge**, **Firefox**
and **Safari**.

In the **`core/common-specs-settings.ts`** you can change the path
to the **main directory** and enable or disable **devtools** for
all tests you run.

> By default, **devtools** are turned off.

## Husky

This repository uses **.husky** as a submodule.
**.husky** runs `pre commit` hook and `lint commit message`.

## Authors

See also the list of [**Authors**](AUTHORS.md).

## Contributors

If you want to improve something, you can write about it
[**here**](https://github.com/Conqueror-Site-Builder/browtest/issues/new/choose).

You can also view a list of [**Contributors**](CONTRIBUTORS.md).

## Contributing

Please read [**Contributing**](CONTRIBUTING.md)
and [**Code of Conduct**](CODE_OF_CONDUCT.md) for details,
and the process for submitting **Pull Request** to us.

## Versioning

We use [**SemVer**](https://semver.org) for versioning.
You can see the available versions
[**here**](https://github.com/Conqueror-Site-Builder/browtest/tags).

## License

This project is licensed under the MIT license - see the
[**LICENSE**](LICENSE) for details.

## Acknowledgments

Thanks to everyone who takes part in the development of the project.
