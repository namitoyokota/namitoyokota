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
| PRs Completed     | 440 (9th in Dev Team) | [Custom Script](https://gist.github.com/namitoyokota/d8d9b8405cb51ca1c77ed2ab1328b5d9) |
| Commits Made      | 5,353                 | Custom Script                                                      |

Last Updated: _March 15th, 2024_

## Documentation Contributions

The following is a list of notable documentations written for seamless knowledge transfer:

-   Wrote [confluence documentation](https://venminder.atlassian.net/wiki/spaces/EN/pages/1743912970/Preparing+a+Release) for preparing for a Control Assessment release.
-   Wrote [confluence documentation](https://venminder.atlassian.net/wiki/spaces/CA/pages/1376419841/Creating+and+Managing+a+Theme) for creating a Control Assessment theme.
-   Wrote [confluence documentation](https://venminder.atlassian.net/wiki/spaces/EN/pages/1379663913/vm-radio) for `vm-radio` component and `vm-radio-group` class within `vm-library`.
-   Created a [contribution guide](https://venminder.visualstudio.com/_git/Control%20Assessments?path=/Microservice/ControlAssessments.Web/control-assessments/README.md) to the Control Assessments Aurelia project.
-   Contributed to the [interview questions bank](https://venminder-my.sharepoint.com/:w:/p/hunter_simpson/EZKXkv04UGZEn4nC0KORcjMB4vel_OEuKeQEJXyg7vpXww?e=QWjp9w&ovuser=c0ee997f-51ac-4ae6-bb27-9839814edd37%2CNamito.Yokota%40venminder.com&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzA3MDMwNzMzMCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D) used for new frontend hires.

## Team Contributions

The following is a list of contributions to improve the Phoenix development team:

-   Managed Control Assessment releases such as creating pull requests, adding release notes, managing testing and bug communications, and triggering release pipelines.
-   Demo completed items to the stakeholders in the sprint demo meeting.
-   Created and managed over 35 themes to be used for delivering assessments to clients.
-   Created a [SharePoint directory](https://venminder.sharepoint.com/:f:/s/ProductDesign/EunoZFdBlxRHp3LQ8CsHHkABJUW3jR2sxvjr0s8c5ijf1w?e=UYLnin) for storing all latest Theme files.
-   Started and lead group testing meetings with meeting notes to minimize production bugs.
-   Manage frontend stories, bugs, and feedbacks wtihin the Jira board.

## Mentorship Contributions

The following is a list of contributions through mentorship and training:

-   Trained and mentored Jim Stopinski on developing Control Assessment themes.
-   Assisted full-stack developers within Team Phoenix contribute to frontend stories.
-   Help lunch & learn meetings to teach frontend concepts to Team Phoenix: CSS Flexbox & Grid, Eslint and Prettier, and PlayWright tests.
-   Assist Frontend Guild memebers in maintanance of vm-library.

## Development Contributions

The following is a list of contributions through code:

### Features

I've added the following features to the Control Assessments project:

-   Lead an automated end-to-end testing initiative using [PlayWright](https://github.com/microsoft/playwright) and its' nightly pipeline.
-   Lead initiative to improve theme building process using [componentized placeholders](https://venminder.atlassian.net/browse/PHX-2839).
-   Created a [dynamic calculation modal](https://venminder.atlassian.net/browse/PHX-1067) using [mathjs](https://github.com/josdejong/mathjs) and presented in [monthly development meeting](https://venminder-my.sharepoint.com/:v:/p/brad_farber/ET71Hvr-pcBCiR-k8ZPaa9YBU6GXdomvLoIgMIv96HvkAw).
-   Created a shared markdown [rich text editor](https://venminder.atlassian.net/browse/PHX-2129) component using ProseMirror.

### Technical improvements

I've made the following improvements to the frontend of the Control Assessments codebase:

-   Implemented a [frontend caching system](https://venminder.atlassian.net/browse/PHX-902).
-   Implemented an [autosave service](https://venminder.visualstudio.com/Control%20Assessments/_git/Control%20Assessments/pullrequest/8434?_a=files&path=/Microservice/ControlAssessments.Web/control-assessments/src/services/template-autosave-service.ts).
-   Created an [event service](https://venminder.visualstudio.com/Control%20Assessments/_git/Control%20Assessments/pullrequest/8105?_a=files&path=/Microservice/ControlAssessments.Web/control-assessments/src/services/event-service.ts).
-   Added sanitiziation to all user inputs using regex to minimize security vulnerabilities.

### Clean Code

Following initiatives were taken to ensure maintenance of best coding standards:

-   Added [linting workflow](https://venminder.atlassian.net/browse/PHX-508) with `eslint` and `prettier` to follow the Frontend Standard including the PR pipeline update.
-   [Refactored the entire Aurelia project](https://venminder.atlassian.net/browse/PHX-900) to follow Frontend Guild and Control Assessment specific standards.
-   Removed unused `Question` property from all controls including the controls table, templates, and assessments using Python and the [boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html) library.
-   Updated webpack to catch TypeScript errors when building Aurelia project.

### Migrations

The following is a list of notable migrations made to the Control Assessments codebase:

-   Migrated native HTML elements within Control Assessments to `vm-library` shared components (checkbox, date picker, inputs, etc) including [`vm-grid-v3`](https://venminder.atlassian.net/browse/PHX-1269).
-   Wrote an [asynchronous Python script](https://venminder.visualstudio.com/Control%20Assessments/_git/Control%20Assessments?path=%2FMicroservice%2FControlAssessments.AWS%2FDeploymentScripts%2FPostDeploy%2FPython%2FPHX2945_MirateDataLibrary.py&version=GC700260f992fb4577512edeaf55210144fa3a9fc6) using boto3, OS proccesses, and threads to migrate the data library records from key structure to reference id.
-   Deprecated the `moment.js` package to [`date-fns`](https://venminder.atlassian.net/browse/PHX-1170) as the moment package is no longer managed.
-   Upgrade the [Font Awesome package](https://venminder.atlassian.net/browse/PHX-901) from version 4 to 6.
-   Migrated Bootstrap styling and layout system to use built in technologies like CSS Flexbox and Grid.

<hr />

**Brag Documents**
&copy; Namito Yokota
