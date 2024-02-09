# Browtest

![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)
![TypeScript Only](https://img.shields.io/badge/TypeScript-only-gray?labelColor=06f)
![Commitlint](https://img.shields.io/github/actions/workflow/status/Archoleat/core/commitlint.yml?label=Commitlint)
![CodeQL](https://img.shields.io/github/actions/workflow/status/Archoleat/browtest/codeql.yml?label=CodeQL)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/Archoleat/browtest/editorconfig.yml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/Archoleat/browtest/prettier.yml?label=Prettier)
![Markdown](https://img.shields.io/github/actions/workflow/status/Archoleat/browtest/markdown.yml?label=Markdown)
![ESLint](https://img.shields.io/github/actions/workflow/status/Archoleat/browtest/eslint.yml?label=ESLint)

> Make cross-browser checking more convenient!

## Table of Contents

-   [Getting Started](#getting-started)
-   [Settings](#settings)
-   [Features](#features)
-   [Scripts](#scripts)
-   [License](#license)

## Getting Started

1.  Clone the repository.

1.  Install dependencies.

1.  Change the **url** address in the **`playwright.config.ts`** file
    if necessary.

1.  Start the local server.

1.  After all steps start **Browtest**.

    > [**Learn more**](#scripts) about the available modes.

## Settings

In **`playwright.config.ts`** the minimum settings are set,
for more serious testing we advise you to use **Chrome**, **Edge**, **Firefox**
and **Safari**.

In the **`core/spec-settings.ts`** you can change the path
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

    > In the [**`prettier.yml`**](.github/workflows/prettier.yml)
    >
    > Also run with a **`pre-commit`** hook.

-   **`lint:editorconfig`**: Runs **Editorconfig Checker** and
    checks all files in the project.

    > Also runs with the [**`editorconfig.yml`**](.github/workflows/editorconfig.yml)
    > workflow.

-   **`lint:md`**: Runs **Remark** with the **`--quiet`** flag and
    checks all **Markdown** files.

    > Also runs with the [**`markdown.yml`**](.github/workflows/markdown.yml)
    > workflow.

-   **`lint:ts`**: Runs **ESLint** with the flag **`--fix`**
    for all **TypeScript** files.

    > Runs with the [**`eslint.yml`**](.github/workflows/eslint.yml)
    > workflow.
    >
    > Also run with a **`pre-commit`** hook.

-   **`test`**: Runs **Mocha** and the tests in the **specs/** folder.

    > Also runs using the [**`mocha.yml`**](.github/workflows/mocha.yml)
    > workflow.

-   **`commit`**: Runs **Commitlint** to create commits according to
    **Conventional Commits** standards.

## License

This project is licensed under the MIT license - see the
[**LICENSE**](LICENSE) for details.
