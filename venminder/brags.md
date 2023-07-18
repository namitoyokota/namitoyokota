# Brag Documents @ Venminder

> This is a list of most notable contributions to the **Venminder** product since December 5th of 2022.

## Table of Contents

-   [Statistics](#statistics)
-   [Documentation Contributions](#documentation-contributions)
-   [Mentorship Contributions](#mentorship-contributions)
-   [Team Contributions](#team-contributions)
-   [Development Contributions](#development-contributions)

## Statistics

| Statistic         | Count | Proof                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pull Requests Completed | 164   | [Azure DevOps](https://venminder.visualstudio.com/_git/Control%20Assessments/pullrequests?_a=completed&createdBy=c0911f8f-a663-6937-94d9-838cc42f81bd)                                                                                                                                                                                                                                                                                                                                          |
| Stories Completed | 61    | [Jira Board](https://venminder.atlassian.net/jira/software/c/projects/PHX/issues/PHX-1548?jql=project%20IN%20(%22PHX%22%2C%22QA%20and%20RainForest%22%2C%22Front-End%20Guild%22)%20AND%20status%20IN%20(Released%2C%22Done%20without%20work%22%2CClosed%2CDone%2C%22Functional%20Test%20Complete%22%2C%22Ready%20for%20Release%22%2C%22Release%20Test%20Complete%22)%20AND%20assignee%20IN%20(638f71df489de2f7f467b037)%20AND%20type%20%3D%20Story%20ORDER%20BY%20created%20DESC) |
| Bugs Fixed  | 50    | [Jira Board](https://venminder.atlassian.net/jira/software/c/projects/PHX/issues/PHX-1589?jql=project%20IN%20%28%22PHX%22%2C%20%22QA%20and%20RainForest%22%2C%20%22Front-End%20Guild%22%29%0Aand%20status%20in%20%28Released%2C%20%22Done%20without%20work%22%2C%20Closed%2C%20Done%2C%20%22Ready%20for%20Release%22%2C%20%22Release%20Test%20Complete%22%2C%20%22Functional%20Test%20Complete%22%29%0Aand%20assignee%20IN%20%28638f71df489de2f7f467b037%29%0Aand%20type%20in%20%28Bug-task%2C%20Bug%29%0AORDER%20BY%20created%20DESC) |

Last Updated: _July 14th, 2023_

## Documentation Contributions
- Wrote [confluence documentation](https://venminder.atlassian.net/wiki/spaces/EN/pages/1379663913/vm-radio) for `vm-radio` component and `vm-radio-group` class within `vm-library`.
- Wrote [confluence documentation](https://venminder.atlassian.net/wiki/spaces/CA/pages/1376419841/Creating+and+Managing+a+Theme) for creating a Control Assessment theme.
- Wrote [contribution guide](https://venminder.visualstudio.com/_git/Control%20Assessments?path=/Microservice/ControlAssessments.Web/control-assessments/README.md) for the Control Assessment's frontend codebase.
- TO DO: [CLAK Documentation](https://venminder.atlassian.net/wiki/spaces/EN/pages/1367736333/Clak+PDF+generator)

## Mentorship Contributions
- Held a [lunch & learn meeting](https://venminder-my.sharepoint.com/:v:/p/david_williams/ERhuoiK7_z1Nsc68x6DAkjUBHDKNYR4zrMzSxqOt-pK_OQ) explaining and teach CSS [Flexbox](https://blogs.namito.wiki/beginners-guide-to-css-flexbox) and [Grid](https://blogs.namito.wiki/beginners-guide-to-css-grid) with [demo website](https://demo.namito.wiki/).
- Trained and mentored Jim Stopinski on developing Control Assessment themes.
- Assisted full-stack developers within Team Phoenix contribute to frontend stories.
- TO DO: Hold a lunch & learn meeting for teaching JavaScript array methods and operators.

## Team Contributions
- Suggested and lead group testing meetings in attempt to minimize the amount of bugs going to production.
- Created a [SharePoint directory](https://venminder.sharepoint.com/:f:/s/ProductDesign/EunoZFdBlxRHp3LQ8CsHHkABJUW3jR2sxvjr0s8c5ijf1w?e=UYLnin) for storing all latest Theme files.
- TO DO: Standardize PR description layout/template for Azure DevOps using [this](https://learn.microsoft.com/en-us/azure/devops/repos/git/pull-request-templates?view=azure-devops) tutorial.
- TO DO: Set up bug description layout/template for Jira using [this](https://community.atlassian.com/t5/Jira-questions/How-can-I-create-an-User-Story-template-in-Jira/qaq-p/1011870) tutorial.

## Development Contributions
- TO WRITE: dynamic calculation modal. [demo in monthly dev meeting](https://venminder-my.sharepoint.com/:v:/p/brad_farber/ET71Hvr-pcBCiR-k8ZPaa9YBU6GXdomvLoIgMIv96HvkAw)
- TO WRITE: PDF generation workflow - Passing methods with (Promise<void>).
- TO WRITE: implemented loading/waiting system.
- TO DO: go back to previous stories and add more.
- Created a [`vm-radio`](https://venminder.visualstudio.com/vm-library/_git/vm-library/pullrequest/10382) shared component alongside its parent CSS class [`vm-radio-group`](https://venminder.visualstudio.com/vm-library/_git/vm-library/pullrequest/10562) within the `vm-library` package to be consumed by Venminder's frontend projects.
- Wrote an abstract autosave service that implements a debounce workflow to prevent excessive API calls. This service can be inherited and used for any API endpoints.
- Created a wrapper service for interacting with Aurelia's event aggregator. This minimizes the risk of developers mistyping the event names and also makes it easier to track which event names are being used where.
- TO WRITE: frontend codebase refactor and cleanup - remove Bootstrap (use original notes in my OneNote).
- Added `.prettierrc` and `.eslintrc.json` files with VSCode settings to automatically follow the lint rules set by the Frontend Guild.
- TO DO: add linting as a pipeline step.
- TO WRITE: Control Assessments to use `vm-library` components (ex. `vm-grid-v3`)
- Upgrade the Font Awesome package from version 4 to 6.
- Deprecated the `moment.js` package to `date-fns` as the moment package is no longer managed.
- TO WRITE: I can do minor backend changes.

<hr />

**Brag Documents**
&copy; Namito Yokota
