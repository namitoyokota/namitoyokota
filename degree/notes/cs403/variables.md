# Variables

Date: February 15, 2020
Lecture: 6
Type: Lecture

- Terms
      - **variable** - an abstraction of a memory cell
      - **referencing environment** - the collection of all names that are visible in the statement
      - **name constant** - variable that is bound to a value only when it is bound to storage
- Variable Attributes
      - name - case sensitivity, length, special characters, special words
      - address - the memory address with which it is associated
      - value - the contents of the location
      - type - determines the range of values of variables and the set of operations
      - lifetime - time during which it is bound to particular memory cell
      - scope - range of statements over which it is visible
- Binding
      - **binding** - an association between an entity and an attribute, such as between a variable and its type
      - **binding time**  - the time at which a binding takes place
      - a binding is **static** if it first occurs before run time and remains uncharged throughout program execution
      - a binding is **dynamic** if it first occurs during execution or can change during execution of the program
- Declaration
      - **explicit declaration** - a program statement used for declaring the types of variables
      - **implicit declaration** - a default mechanism for specifying types of variables through default conventions, rather than declaration statements
- Lifetimes
      - **stack-dynamic** - storage bindings are created for variables when their declaration statements are elaborated
      - **explicit heap-dynamic** - allocated and deallocated by explicit directives, specified by the programmer
      - **implicit heap-dynamic** - allocation and deallocation caused by assignment statements
- Scope
      - **local variables** - those that are declared in that unit
      - **nonlocal variables** - those that are visible in the unit but not declared there
      - **global variables** - special category of nonlocal variables
      - search process - search declarations, first locally, then in increasingly larger enclosing scopes, until one is found for the given name
      - **static ancestors** - enclosing static scopes
      - **static parent** - the nearest static ancestor
