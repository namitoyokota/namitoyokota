# Frontend Development Guidelines

This document outlines a non-exhaustive list of details that make a good web interface and codebase.

## Philosophies

-   The user interface should be pleasing to the eye. Develop the interface so that you want to visit the site just to look and interact. [^1]
-   Implement interface property to the pixel.

## Interface

-   Optimistically update data locally and roll back on server error with feedback.
-   Follow the latest WCAG guidelines [^5]
-   Each page should have a default loading interface where elements are displayed in a skeleton view.
-   Each page should have a waiting screen where elements are disabled waiting on an API response.
-   Any failures of an API request should not prevent the UI’s functionality. The user should always be able to get to a different page, or idle on the same page with the content without any blockers.
-   Toggles should immediately take effect, not require confirmation.
    Button should be disabled after submission to avoid duplicate network requests.
-   Animation duration should not be more than 200ms for interactions to feel immediate.
-   Tooltips triggered by hover should not contain interactive content.

## HTML

-   Only use ids for form elements.
-   Classes should be a `kebab-case`.
-   Ids should be `camelCase`.
-   Avoid inline CSS using `<style>`
-   Avoid inline JavaScript using `<script>`
-   Inputs should be wrapped with a `<form>` to submit by pressing Enter.
-   Inputs should leverage HTML form validation by using the `required` attribute when appropriate.
-   Hover states should not be visible on touch press (use `@media (hover: hover)`).

## CSS
-   Leverage CSS/SCSS variables to allow consistencies across the codebase with colors, font sizes, paddings, or z indexes. This will also allow for easier implementation of color themes.

## JavaScript

-   Use JSDoc comments on all variables and methods. Variables should be a one-line comment while methods are multiple-lines. [^2]
-   When declaring an array that does not have an initial value, always set the array to an empty array to prevent potential errors.
-   Classes and enums should be `ProperCase`.
-   Variables and methods should be `camelCase`.
-   File names should be `kebab-case`.
-   Avoid referencing string literals or numbers directly by leveraging `enum` and `const`.
-   Use `const` when value doesn't change, `let` when value does change, and never use `var`.
-   `console.log()` and `debugger` statements should be removed prior to a pull request.
-   Consider creating `isEqual()` method to model classes when comparing 2 objects. This will improve performance (no need for JSON stringify comparison) as well as readability/future maintainability.
-   Use `structuedClone()` over `JSON.parse(JSON.stringify))` when deep copying.

## TypeScript

-   All variables and functions should have a specified type on declaration.
-   Never use `any` type unless absolutely necessary.
-   Use `===` for comparisons to leverage type checking.

## Angular

-   Avoid using inheritance for components.
-   Each component files should be stored under a folder with the name of the component: `/card/card.component.html`.
-   Avoid using events to handle data changes.
-   Any data that has one source of truth and is used in multiple components should be handling in a state management service.
-   Data should always flow downward and not sent back up to the parent. If the data changes, use a state management service to trigger all updates from the top down.
-   If a variable declared at the class level never changes, use the `readonly` keyword.

## Browser

-   Cache commonly requested GET API responses in the browser cache and retrieve as fallback upon API failure. [^4]
-   Use URL parameters to store data that should retain upon page refresh or URL passed to another user. [^3]

## Codebase

-   Agree upon a formatting standard and set up `eslint` with `prettier`.
-   A pull request should include an objective, a list of changes, and screenshot(s) when appropriate.
-   Create and maintain a root readme document including the objective of the project, installation guide, file structure explanation, 3rd party packages used, and contribution guide/coding standards.
-   Only use line comments when absolutely necessary (code is difficult to understand).
-   Commented out code should be removed. (Version control can easily retrieve previously removed code.)
-   Remove unused imports.
-   Distinguish use cases for absolute and relative paths for imports:
    -   Absolute path should be used when the path of the file should never change in the future. (`shared/models/person.ts`)
    -   Relative path when the file is related to the importer. (`../person.ts`)
-   Keep dependencies up to date.

## Assets

-   Use the appropriate image types (svg, png, jpeg, etc).

[^1]: [Minimalist's developer portfolio](https://www.namitoyokota.com)
[^2]: [Google JavaScript Style Guide - JSDoc](https://google.github.io/styleguide/jsguide.html#jsdoc)
[^3]: [Theo's URL as a State Manager]()
[^4]: [Simple Caching with Local Storage](https://jonmeyers.io/blog/simple-caching-with-local-storage/)
[^5]: [WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
