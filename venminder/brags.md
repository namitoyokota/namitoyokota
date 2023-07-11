# Brag Documents @ Venminder

> This is a list of most notable contributions to the **Venminder** product from December 5th of 2022 until today.

## Table of Contents

-   [Statistics](#statistics)
-   [Component Library Contributions](#component-library-contributions)
-   [Documentation Contributions](#documentation-contributions)
-   [Team Contributions](#team-contributions)
-   [Mentorship Contributions](#mentorship-contributions)
-   [Feature Contributions](#feature-contributions)
-   [Improvement Contributions](#improvement-contributions)
-   [Clean Code Contributions](#clean-code-contributions)
-   [Migration Contributions](#migration-contributions)

## Statistics

| Statistic         | Count | Proof                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pull Requests Completed | 162   | [Azure DevOps](https://venminder.visualstudio.com/_git/Control%20Assessments/pullrequests?_a=completed&createdBy=c0911f8f-a663-6937-94d9-838cc42f81bd)                                                                                                                                                                                                                                                                                                                                          |
| Stories Completed | 59    | [Jira Board](https://venminder.atlassian.net/jira/software/c/projects/PHX/issues/PHX-1548?jql=project%20IN%20(%22PHX%22%2C%22QA%20and%20RainForest%22%2C%22Front-End%20Guild%22)%20AND%20status%20IN%20(Released%2C%22Done%20without%20work%22%2CClosed%2CDone%2C%22Functional%20Test%20Complete%22%2C%22Ready%20for%20Release%22%2C%22Release%20Test%20Complete%22)%20AND%20assignee%20IN%20(638f71df489de2f7f467b037)%20AND%20type%20%3D%20Story%20ORDER%20BY%20created%20DESC) |
| Bugs Fixed  | 46    | [Jira Board](https://venminder.atlassian.net/jira/software/c/projects/PHX/issues/PHX-1589?jql=project%20IN%20%28%22PHX%22%2C%20%22QA%20and%20RainForest%22%2C%20%22Front-End%20Guild%22%29%0Aand%20status%20in%20%28Released%2C%20%22Done%20without%20work%22%2C%20Closed%2C%20Done%2C%20%22Ready%20for%20Release%22%2C%20%22Release%20Test%20Complete%22%2C%20%22Functional%20Test%20Complete%22%29%0Aand%20assignee%20IN%20%28638f71df489de2f7f467b037%29%0Aand%20type%20in%20%28Bug-task%2C%20Bug%29%0AORDER%20BY%20created%20DESC) |

Last Updated: _July 11th, 2023_

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
