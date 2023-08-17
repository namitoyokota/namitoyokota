# Brag Documents @ Venminder

> This is a list of most notable contributions to the **Venminder** product since December 5th of 2022.

`Aurelia` `TypeScript` `HTML/CSS` `KnockoutJS` `.NET` `C#`

## Table of Contents

-   [Statistics](#statistics)
-   [Documentation Contributions](#documentation-contributions)
-   [Mentorship Contributions](#mentorship-contributions)
-   [Team Contributions](#team-contributions)
-   [Development Contributions](#development-contributions)

## Statistics

| Statistic         | Count | Proof                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pull Requests Completed | 189   | [Azure DevOps](https://venminder.visualstudio.com/_git/Control%20Assessments/pullrequests?_a=completed&createdBy=c0911f8f-a663-6937-94d9-838cc42f81bd)                                                                                                                                                                                                                                                                                                                                          |
| Stories Completed | 66    | [Jira Board](https://venminder.atlassian.net/jira/software/c/projects/PHX/issues/PHX-1548?jql=project%20IN%20(%22PHX%22%2C%22QA%20and%20RainForest%22%2C%22Front-End%20Guild%22)%20AND%20status%20IN%20(Released%2C%22Done%20without%20work%22%2CClosed%2CDone%2C%22Functional%20Test%20Complete%22%2C%22Ready%20for%20Release%22%2C%22Release%20Test%20Complete%22)%20AND%20assignee%20IN%20(638f71df489de2f7f467b037)%20AND%20type%20%3D%20Story%20ORDER%20BY%20created%20DESC) |
| Bugs Fixed  | 58    | [Jira Board](https://venminder.atlassian.net/jira/software/c/projects/PHX/issues/PHX-1589?jql=project%20IN%20%28%22PHX%22%2C%20%22QA%20and%20RainForest%22%2C%20%22Front-End%20Guild%22%29%0Aand%20status%20in%20%28Released%2C%20%22Done%20without%20work%22%2C%20Closed%2C%20Done%2C%20%22Ready%20for%20Release%22%2C%20%22Release%20Test%20Complete%22%2C%20%22Functional%20Test%20Complete%22%29%0Aand%20assignee%20IN%20%28638f71df489de2f7f467b037%29%0Aand%20type%20in%20%28Bug-task%2C%20Bug%29%0AORDER%20BY%20created%20DESC) |

Last Updated: _August 17th, 2023_

## Documentation Contributions
- Wrote [confluence documentation](https://venminder.atlassian.net/wiki/spaces/CA/pages/1376419841/Creating+and+Managing+a+Theme) for creating a Control Assessment theme.
- Wrote [confluence documentation](https://venminder.atlassian.net/wiki/spaces/EN/pages/1379663913/vm-radio) for `vm-radio` component and `vm-radio-group` class within `vm-library`.
- Wrote [contribution guide](https://venminder.visualstudio.com/_git/Control%20Assessments?path=/Microservice/ControlAssessments.Web/control-assessments/README.md) for the Control Assessment's frontend codebase.
- Contributed to [interview question bank](https://venminder-my.sharepoint.com/:w:/p/hunter_simpson/EZKXkv04UGZEn4nC0KORcjMB4vel_OEuKeQEJXyg7vpXww?e=QWjp9w&ovuser=c0ee997f-51ac-4ae6-bb27-9839814edd37%2CNamito.Yokota%40venminder.com&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzA3MDMwNzMzMCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D) used for new frontend hires.

## Mentorship Contributions
- Held a [lunch & learn meeting](https://venminder-my.sharepoint.com/:v:/p/david_williams/ERhuoiK7_z1Nsc68x6DAkjUBHDKNYR4zrMzSxqOt-pK_OQ) explaining and teach CSS [Flexbox](https://blogs.namito.wiki/beginners-guide-to-css-flexbox) and [Grid](https://blogs.namito.wiki/beginners-guide-to-css-grid) with [demo website](https://demo.namito.wiki/).
- Trained and mentored Jim Stopinski on developing Control Assessment themes.
- Assisted full-stack developers within Team Phoenix contribute to frontend stories.

## Team Contributions
- Created a [SharePoint directory](https://venminder.sharepoint.com/:f:/s/ProductDesign/EunoZFdBlxRHp3LQ8CsHHkABJUW3jR2sxvjr0s8c5ijf1w?e=UYLnin) for storing all latest Theme files.
- Started and lead group testing meetings with meeting notes to minimize bugs.
- Collect meeting highlights from Frontend Guild meeting and pass it on to Phoenix.

## Development Contributions
### Features
- Created a [dynamic calculation modal](https://venminder.atlassian.net/browse/PHX-1067) for Financial Health Tables. [Monothly Development Meeting Demo](https://venminder-my.sharepoint.com/:v:/p/brad_farber/ET71Hvr-pcBCiR-k8ZPaa9YBU6GXdomvLoIgMIv96HvkAw)
- Added [drag and drop](https://venminder.atlassian.net/browse/PHX-1176) reordering capability to controls within a template.
- Implemented auto calculation functionality of section ratings.
- Contributed to exporting the assessment as a [PDF using CLAK](https://venminder.atlassian.net/browse/PHX-899).
- Implemented a [loading and waiting](https://venminder.atlassian.net/browse/PHX-1584) system to provide more user feedback.
- Created a [`vm-radio`](https://venminder.visualstudio.com/vm-library/_git/vm-library/pullrequest/10382) shared component alongside its parent CSS class [`vm-radio-group`](https://venminder.visualstudio.com/vm-library/_git/vm-library/pullrequest/10562) within the `vm-library` package to be consumed by Venminder's frontend projects.

### Improvements
- Implemented a caching system for the frontend to avoid duplicate API calls: [store service](https://venminder.atlassian.net/browse/PHX-902).
- Wrote an abstract autosave service that implements a debounce workflow to prevent excessive API calls. This service can be inherited and used for any API endpoints.
- Created a wrapper service for interacting with Aurelia's event aggregator. This minimizes the risk of developers mistyping the event names and also makes it easier to track which event names are being used where.
- Added a navigation service to minimizing the hardcoded route paths.

### Clean Code
- [Refactored the entire Aurelia project](https://venminder.atlassian.net/browse/PHX-900) to follow Frontend Guild and Control Assessment specific standards.
- Added [linting workflow](https://venminder.atlassian.net/browse/PHX-508) with `eslint` and `prettier` to follow the Frontend Standard.
  
### Migrations
- Upgraded deprecated `vm-grid-v2` to vm-library's [`vm-grid-v3`](https://venminder.atlassian.net/browse/PHX-1269) component
- Migrated native HTML elements within Control Assessments to `vm-library` shared components (checkbox, date picker, inputs, etc).
- Upgrade the [Font Awesome package](https://venminder.atlassian.net/browse/PHX-901) from version 4 to 6.
- Deprecated the `moment.js` package to [`date-fns`](https://venminder.atlassian.net/browse/PHX-1170) as the moment package is no longer managed.

<hr />

**Brag Documents**
&copy; Namito Yokota
