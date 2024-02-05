# Browtest

![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)
![TypeScript Only](https://img.shields.io/badge/TypeScript-only-gray?labelColor=06f)
![Commitlint](https://img.shields.io/github/actions/workflow/status/Archoleat/core/commitlint.yml?label=Commitlint)
![CodeQL](https://img.shields.io/github/actions/workflow/status/Archoleat/browtest/codeql.yml?label=CodeQL)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/Archoleat/browtest/editorconfig.yml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/Archoleat/browtest/prettier.yml?label=Prettier)
![Markdown](https://img.shields.io/github/actions/workflow/status/Archoleat/browtest/markdown.yml?label=Markdown)
![ESLint](https://img.shields.io/github/actions/workflow/status/Archoleat/browtest/eslint.yml?label=ESLint)

## Table of Contents

-   [Table of Contents](#table-of-contents)

-   [Getting Started](#getting-started)

-   [Features](#features)

-   [Scripts](#scripts)

-   [Settings](#settings)

-   [Additions](#additions)
    -   [Husky](#husky)

-   [Authors](#authors)

-   [Contributors](#contributors)

-   [Contributing](#contributing)

-   [Versioning](#versioning)

-   [License](#license)

## **Make cross-browser checking more convenient!**

This project is built on [**Playwright**](https://github.com/microsoft/playwright)
and [**Archoleat Repo Template**](https://github.com/Archoleat/archoleat-repo-template).

> \[!TIP]
> Nice addition for [**Archoleat Builder**](https://github.com/Archoleat/archoleat-builder)!

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

## Scripts

-   **`init`**: Installs dependencies, **Husky**, **Playwright**
    and update submodules.

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

-   **`format`**: Runs **Prettier** with the **`--write`** flag
    for all files.

-   **`lint:formatting`**: Runs **Prettier** with the **`--check`** flag
    for all files.

    > In the [**`prettier.yml`**](https://github.com/Archoleat/browtest/blob/main/.github/workflows/prettier.yml)
    >
    > Also run with a **`pre-commit`** hook.

-   **`lint:editorconfig`**: Runs **Editorconfig Checker** and
    checks all files in the project.

    > Also runs with the [**`editorconfig.yml`**](https://github.com/Archoleat/browtest/blob/main/.github/workflows/editorconfig.yml)
    > workflow.

-   **`lint:md`**: Runs **Remark** with the **`--quiet`** flag and
    checks all **Markdown** files.

    > Also runs with the [**`markdown.yml`**](https://github.com/Archoleat/browtest/blob/main/.github/workflows/markdown.yml)
    > workflow.

-   **`lint:ts`**: Runs **ESLint** with the flag **`--fix`**
    for all **TypeScript** files.

    > Runs with the [**`eslint.yml`**](https://github.com/Archoleat/browtest/blob/main/.github/workflows/eslint.yml)
    > workflow.
    >
    > Also run with a **`pre-commit`** hook.

-   **`test`**: Runs **Mocha** and the tests in the **specs/** folder.

    > Also runs using the [**`mocha.yml`**](https://github.com/Archoleat/browtest/blob/main/.github/workflows/mocha.yml)
    > workflow.

-   **`commit`**: Runs **Commitlint** to create commits according to
    **Conventional Commits** standards.

## Settings

In **`playwright.config.ts`** the minimum settings are set,
for more serious testing we advise you to use **Chrome**, **Edge**, **Firefox**
and **Safari**.

In the **`core/common-specs-settings.ts`** you can change the path
to the **main directory** and enable or disable **devtools** for
all tests you run.

> By default, **devtools** are turned off.

## Additions

### Husky

This repository uses **.husky** as a submodule.
**.husky** runs **`pre-commit`** hook and **`commit-msg`**.

## Authors

See also the list of [**Authors**](AUTHORS.md).

## Contributors

If you want to improve something, you can write about it
[**here**](https://github.com/Archoleat/browtest/issues/new/choose).

You can also view a list of [**Contributors**](CONTRIBUTORS.md).

## Contributing

Please read [**Contributing**](CONTRIBUTING.md)
and [**Code of Conduct**](CODE_OF_CONDUCT.md) for details,
and the process for submitting **Pull Request** to us.

## Versioning

We use [**SemVer**](https://semver.org) for versioning.
You can see the available versions
[**here**](https://github.com/Archoleat/browtest/tags).

## License

This project is licensed under the MIT license - see the
[**LICENSE**](LICENSE) for details.
