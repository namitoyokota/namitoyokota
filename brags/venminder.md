# Venminder

> This is a list of most notable contributions to the **Venminder** product from December 5th of 2022 until today.

## Table of Contents

-   [Component Library Contributions](#component-library-contributions)
    -   [vm-radio](#vm-radio)
-   [Documentation Contributions](#documentation-contributions)
    -   [Theme Documentation](#theme-documentation)
-   [Team Contributions](#team-contributions)
    -   [Group Testing Meetings](#group-testing-meetings)
-   [Mentorship Contributions](#mentorship-contributions)
    -   [CSS Flexbox and Grid - Lunch & Learn](#css-flexbox-and-grid---lunch--learn)
-   [Feature Contributions](#feature-contributions)
-   [Improvement Contributions](#improvement-contributions)
    -   [Autosave Service](#autosave-service)
    -   [Event Service](#event-service)
-   [Clean Code Contributions](#clean-code-contributions)
    -   [Added Lint Rules](#added-lint-rules)
-   [Migration Contributions](#migration-contributions)
    -   [Font Awesome Upgrade](#font-awesome-upgrade)
    -   [date-fns Migration](#date-fns-migration)

## Component Library Contributions

### vm-radio

Created a `vm-radio` shared component within the `vm-library` package to be consumed by Venminder's frontend projects.

-   [vm-library PR](https://venminder.visualstudio.com/vm-library/_git/vm-library/pullrequest/10382)
-   [Control Assessments PR](https://venminder.visualstudio.com/Control%20Assessments/_git/Control%20Assessments/pullrequest/10397)
-   [Confluence Documentation]()

## Documentation Contributions

### Theme Documentation

Wrote a wiki page for Marketing to use as a guide to creating themes.

-   [Confluence Documentation](https://venminder.atlassian.net/wiki/spaces/CA/pages/1376419841/Creating+and+Managing+a+Theme).

## Team Contributions

### Group Testing Meetings

Suggested and lead group testing meetings in attempt to minimize the amount of bugs going to production and to test edge cases for stories completed by other developers than yourself.

## Mentorship Contributions

### CSS Flexbox and Grid - Lunch & Learn

-   Watch the [recorded video call](https://venminder-my.sharepoint.com/:v:/p/david_williams/ERhuoiK7_z1Nsc68x6DAkjUBHDKNYR4zrMzSxqOt-pK_OQ).
-   Wrote two blog posts to go along with the meeting - one for [Flexbox](https://blogs.namito.wiki/beginners-guide-to-css-flexbox) and other for [Grid](https://blogs.namito.wiki/beginners-guide-to-css-grid)
-   Created a [demo](https://demo.namito.wiki/) site to display responsiveness of [Flexbox](https://demo.namito.wiki/#/flex) and [Grid](https://demo.namito.wiki/#/grid)

### More to Write About

-   Assisting full-stack developers (Patrick, Ravi, and Nathan) on any frontend work
-   Teaching frontend skills to full-stack devs using Lunch and Learn
-   Training Jim to develop theme files

### TODO

-   Hold a lunch & learn meeting for JavaScript array methods

## Feature Contributions

## Improvement Contributions

### Autosave Service

Wrote an abstract autosave service that implements a debounce workflow to prevent excessive API calls. This service can be inherited and used for any API endpoints.

### Event Service

Created a wrapper service for interacting with Aurelia's event aggregator. This minimizes the risk of developers mistyping the event names and also makes it easier to track which event names are being used where.

## Clean Code Contributions

### Frontend Codebase Refactor and Cleanup

### Added Lint Rules

Added `.prettierrc` and `.eslintrc.json` files with VSCode settings to automatically follow the lint rules set by the Frontend Guild.

### Add Linting as Pipeline Step

## Migration Contributions

### Font Awesome Upgrade

Upgrade the Font Awesome package from version 4 to 6.

### date-fns Migration

Deprecated the `moment.js` package to `date-fns` as the moment package is no longer managed.

<hr />

**Brag Documents**
&copy; Namito Yokota
