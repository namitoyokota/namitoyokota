# Interview Questions @ Venminder

## HTML/CSS/SCSS

-   What is the difference between id and class attributes of HTML elements? (HTML)
    -   An id is used to identify one singular element while a class can be applied to multiple elements.
-   What is the difference between div and span? (HTML)
    -   Span is in-line while div is block-line.
-   Why would you use the alt attribute on an img tag? (HTML)
    -   An alt attribute displays text when the image cannot be displayed.
-   What two CSS properties could you use to handle layouts? (HTML/CSS)
    -   Flex and grid
-   Explain the CSS Box Model.
    -   Content – The content of the box
    -   Padding – Area around the content (inside the box)
    -   Border – A border around content and padding
    -   Margin – Area outside the box
-   What is the difference between rgb() and rgba()? (CSS)
    -   Both specify color, but rgba also specifies opacity.
-   What is z-index? (CSS)
    -   Z-index specifies the stack order of elements on a page with the highest z-index always appearing on top. For example, if you have two overlapping elements and one has a z-index of 10 and the other a z-index of 100, the element with the 100 z-index would appear above the other element.
-   What is the difference between display: none and visibility: hidden on HTML elements? (HTML/CSS)
    -   While both will hide the element on the page, the element with visibility: hidden would still take up space on the page while display: none would not.
-   What does !important do? When should you use it? Why should you not use it? (CSS)
    -   !important overrides any other specified CSS styles for that element. For example, color: #fff !important will always make the text for that element white even if another color is specified. It should be used when you need to make a style the priority for an element. It shouldn't be used for that very reason: it overrides everything. It is better to make sure only one style is applied to each element or class so that it is not necessary.
-   What are some advantages/features of using a CSS pre-processor like SCSS? (SCSS)
    -   Variables, nesting, mixins
-   What are mixins? (SCSS)
    -   Mixins are defined styles that can be re-used throughout the stylesheet by including them in your elements.

## JS/TS

-   What are the primitive types in TypeScript?
    -   String, number, boolean
-   What are the keyword declarations in TypeScript? Harder - what are the differences between them?
    -   var (function scoped/global variable), let (block scoped), const (block scoped, constant)
-   What is type inference?
    -   TypeScript will infer a type if a type is not explicitly defined. So, for example, someValue = 'example' will still be a string even though it has not been defined as such.
-   What are union types?
    -   Describes a value that can be one of several types
-   What is the difference between a class and an interface?
    -   Both define the properties for an object, but a class can provide implementation and initialization while an interface does not. Interfaces are solely used for type checking.
-   What is the difference between .find and .some?
    -   Both will find a given item in an array, but .find will return the item itself while .some will return a boolean indicating whether or not the item exists.
-   What is a callback function?
    -   A function passed into another function as an argument
-   How would you remove an item from an array?
    -   Multiple correct answers. .filter, splice
-   How would you make a deep copy of an array? Why do you need to?
    -   JSON.parse(JSON.stringify(someArray)). You need to because TypeScript is pass-by-reference so you would need a deep copy of an array for array comparisons.
-   What is the difference between synchronous and asynchronous JavaScript?
    -   Async is multi-thread (can run in parallel)
    -   Sync is single-thread (one operation at a time)
-   What are spread and rest operators?
    -   Spread allows iterable to be expanded in places with multiple arguments
    -   Rest is a parameter syntax to accept an indefinite number of arguments as an array

## Angular

-   What are lifecycle hooks? Name some examples.
    -   Lifecycle hooks are trigger points at certain phases throughout the life cycle. Example - ngOnInit, ngAfterViewInit, ngOnDestroy
-   What is the difference between a promise and an observable?
    -   A promise emits a single value, while an observable emits multiple values over a period of time.
-   What are pipes?
    -   Pipes are functions designed to accept an input value and transform it into an output value.
-   What is string interpolation?
    -   One-way data binding that outputs the data from the TS code to the HTML. Ex) {{someString}}
