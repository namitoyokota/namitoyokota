# Brag Document @ Venminder

> This is a list of most notable contributions to the **Venminder** product since December 5th of 2022.

`Aurelia` `TypeScript` `HTML/CSS` `KnockoutJS` `.NET` `C#`

## Table of Contents

-   [Statistics](#statistics)
-   [Documentation Contributions](#documentation-contributions)
-   [Mentorship Contributions](#mentorship-contributions)
-   [Team Contributions](#team-contributions)
-   [Development Contributions](#development-contributions)

## Statistics

| Categories        | Count                 | Reference                                                          |
| ----------------- | --------------------- | ------------------------------------------------------------------ |
| Stories Completed | 160                   | [Jira Board](https://venminder.atlassian.net/issues/?filter=10318) |
| Bugs Fixed        | 142                   | [Jira Board](https://venminder.atlassian.net/issues/?filter=10321) |
| PRs Completed     | 440 (9th @ Venminder) | -                                                                  |
| Commits Made      | 5,353                 | -                                                                  |

Last Updated: _March 15th, 2024_

## Documentation Contributions

The following is a list of notable documentations written for seamless knowledge transfer:

-   Wrote [confluence documentation](https://venminder.atlassian.net/wiki/spaces/CA/pages/1376419841/Creating+and+Managing+a+Theme) for creating a Control Assessment theme.
-   Wrote [confluence documentation](https://venminder.atlassian.net/wiki/spaces/EN/pages/1379663913/vm-radio) for `vm-radio` component and `vm-radio-group` class within `vm-library`.
-   Wrote [contribution guide](https://venminder.visualstudio.com/_git/Control%20Assessments?path=/Microservice/ControlAssessments.Web/control-assessments/README.md) for the Control Assessment's frontend codebase.
-   Contributed to [interview question bank](https://venminder-my.sharepoint.com/:w:/p/hunter_simpson/EZKXkv04UGZEn4nC0KORcjMB4vel_OEuKeQEJXyg7vpXww?e=QWjp9w&ovuser=c0ee997f-51ac-4ae6-bb27-9839814edd37%2CNamito.Yokota%40venminder.com&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzA3MDMwNzMzMCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D) used for new frontend hires.

## Mentorship Contributions

The following is a list of contributions through mentorship and training:

-   Trained and mentored Jim Stopinski on developing Control Assessment themes.
-   Assisted full-stack developers within Team Phoenix contribute to frontend stories.
-   Help lunch & learn meetings to teach frontend concepts to Team Phoenix: CSS Flexbox & Grid, Eslint and Prettier, and PlayWright tests.

## Team Contributions

The following is a list of contributions to improve the Phoenix development team:

-   Created a [SharePoint directory](https://venminder.sharepoint.com/:f:/s/ProductDesign/EunoZFdBlxRHp3LQ8CsHHkABJUW3jR2sxvjr0s8c5ijf1w?e=UYLnin) for storing all latest Theme files.
-   Created numerous themes to be used for delivering assessments to clients.
-   Started and lead group testing meetings with meeting notes to minimize production bugs.
-   Demo completed items to the stakeholders in the sprint demo meeting.
-   Manage frontend stories, bugs, and feedbacks wtihin the Jira board.

## Development Contributions

The following is a list of contributions through code:

### Features

I've added the following features to the Control Assessments project:

-   Added a markdown [rich text editor](https://venminder.atlassian.net/browse/PHX-2129) using ProseMirror.
-   Added [Chart.js library](https://github.com/chartjs) to support [displaying graphs and charts](https://venminder.atlassian.net/browse/PHX-1594).
-   Added a [drag and drop reordering](https://venminder.atlassian.net/browse/PHX-1176) feature using [bcx-aurelia-dnd](https://github.com/buttonwoodcx/bcx-aurelia-dnd).
-   Created a [dynamic calculation modal](https://venminder.atlassian.net/browse/PHX-1067) using [mathjs](https://github.com/josdejong/mathjs) and presented in [monthly development meeting](https://venminder-my.sharepoint.com/:v:/p/brad_farber/ET71Hvr-pcBCiR-k8ZPaa9YBU6GXdomvLoIgMIv96HvkAw).
-   Proposed and added [drag and drop file upload](https://venminder.atlassian.net/browse/PHX-1970) feature.
-   Proposed and added [expand/minimize](https://venminder.atlassian.net/browse/PHX-1889) feature to template builder.
-   Contributed to exporting the assessment as a [PDF using CLAK](https://venminder.atlassian.net/browse/PHX-899).
-   Created a [`vm-radio`](https://venminder.visualstudio.com/vm-library/_git/vm-library/pullrequest/10382) within the `vm-library` package.
-   Proposed and added [loading and waiting](https://venminder.atlassian.net/browse/PHX-1584) screens.
-   Created new pages: View assessment, feature flag management, frameworks, and FHA template and assessment.
-   Actively working on automating end-to-end testing using [PlayWright](https://github.com/microsoft/playwright).

### Improvements

I've made the following improvements to the frontend of the Control Assessments codebase:

-   Implemented a [frontend caching system](https://venminder.atlassian.net/browse/PHX-902).
-   Implemented an [autosave service](https://venminder.visualstudio.com/Control%20Assessments/_git/Control%20Assessments/pullrequest/8434?_a=files&path=/Microservice/ControlAssessments.Web/control-assessments/src/services/template-autosave-service.ts).
-   Created an [event service](https://venminder.visualstudio.com/Control%20Assessments/_git/Control%20Assessments/pullrequest/8105?_a=files&path=/Microservice/ControlAssessments.Web/control-assessments/src/services/event-service.ts).
-   Added a [navigation service](https://venminder.visualstudio.com/Control%20Assessments/_git/Control%20Assessments/pullrequest/8052).
-   Added sanitiziation to all user inputs using regex for security purposes.

### Clean Code

Following initiatives were taken to ensure maintenance of best coding standards:

-   Created a [contribution guide](https://venminder.visualstudio.com/_git/Control%20Assessments?path=/Microservice/ControlAssessments.Web/control-assessments/README.md) to the Control Assessments Aurelia project.
-   Added [linting workflow](https://venminder.atlassian.net/browse/PHX-508) with `eslint` and `prettier` to follow the Frontend Standard.
-   Updated PR pipeline to catch linting errors.
-   Updated webpack to catch TypeScript errors when building Aurelia project.
-   [Refactored the entire Aurelia project](https://venminder.atlassian.net/browse/PHX-900) to follow Frontend Guild and Control Assessment specific standards.

### Migrations

The following is a list of notable migrations made to the Control Assessments codebase:

-   Upgraded deprecated `vm-grid-v2` to vm-library's [`vm-grid-v3`](https://venminder.atlassian.net/browse/PHX-1269) component
-   Migrated native HTML elements within Control Assessments to `vm-library` shared components (checkbox, date picker, inputs, etc).
-   Upgrade the [Font Awesome package](https://venminder.atlassian.net/browse/PHX-901) from version 4 to 6.
-   Deprecated the `moment.js` package to [`date-fns`](https://venminder.atlassian.net/browse/PHX-1170) as the moment package is no longer managed.
-   Migrated Bootstrap layout system to CSS Flexbox and Grid.

<hr />

**Brag Documents**
&copy; Namito Yokota
