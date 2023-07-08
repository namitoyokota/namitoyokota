# Software Engineering Review

Date: August 25, 2020
Section: Lecture 2
Type: Lecture

## introduction

- software engineering is a discipline whose aim is the production of fault-free software, delivered on time and within budget, which satisfies the users needs
  - software lifecycles

![Software%20Engineering%20Review%208bc4f0fcbb714399a3e662777c88bbe8/Screen_Shot_2020-08-25_at_7.11.31_PM.png](Software%20Engineering%20Review%208bc4f0fcbb714399a3e662777c88bbe8/Screen_Shot_2020-08-25_at_7.11.31_PM.png)

![Software%20Engineering%20Review%208bc4f0fcbb714399a3e662777c88bbe8/Screen_Shot_2020-08-25_at_7.11.41_PM.png](Software%20Engineering%20Review%208bc4f0fcbb714399a3e662777c88bbe8/Screen_Shot_2020-08-25_at_7.11.41_PM.png)

- abstraction
      - a means of achieving stepwise refinement by accentuating relevant details (and, by implication, suppressing unnecessary details)
      - examples: braking in your car, turning on lights in a room
      - abstraction is a process whereby we identify the important aspects of a phenomenon and ignore its details
- information hiding
      - the purpose of hiding is to make inaccessible certain details that should not affect other parts of a system
      -
- abstraction vs information hiding
      - abstraction is about providing a representation of some thing which highlights that thing's essential elements
      - information hiding is primarily about hiding design decisions to remove dependencies for change
- encapsulation
      - the gathering together into one unit of all aspects of the real-world entity modeled by the abstract data unit
- information hiding vs encapsulation
      - it is possible to have an encapsulated module that has all of its internal structure visible from the outside
- cohesion and coupling
      - two factors that help increase reliability, understandability, efficiency, and maintainability within and between modules
      - cohesion - within a module
      - coupling - between modules
- cohesion
      - modular cohesion
          - the degree of interaction within a module
      - coincidental cohesion
          - a module whose elements perform multiple, completely unrelated actions
          - disadvantages
              - severe lack of maintainability of product
              - lack of reusability
          - corrective action
              - break the module into smaller modules
      - logical cohesion
          - occurs when overlapping parts of functions that have the same lines of code or the same buffers, but are not even executed at the same time
          - disadvantages
              - the interface is difficult to understand
              - the code for more than one action may be intertwined, leading to maintainability problems
              - the intertwining makes reusability of the module difficult, if not impossible
          - corrective action
              - separate the functions and rewrite
      - communicational cohesion
          - a module whose elements contribute to activities that use the same input or output data
          - makes the transition into modules more easily maintainable, but still not easily usable
      - informational and functional cohesion
          - a module whose elements perform a number of actions, each with its own entry point, with independent code for each action, and all performed on the same data structure
          - supports structured programming concepts
      - comparisons

![Software%20Engineering%20Review%208bc4f0fcbb714399a3e662777c88bbe8/Screen_Shot_2020-08-25_at_7.24.39_PM.png](Software%20Engineering%20Review%208bc4f0fcbb714399a3e662777c88bbe8/Screen_Shot_2020-08-25_at_7.24.39_PM.png)

- coupling
      - modular coupling
          - the degree of interaction between two modules
      - content coupling
          - two modules exhibit content coupling if one refers to the inside of the other in any way
          - value being accessed is not passed through the parameter list
      - common coupling
          - two modules that refer to the same global data area
          - disadvantages
              - global areas may sometimes be drastically abused, as in when different modules use the same area to store quite different pieces of information called overloading
              - programs using a lot of global data are extremely difficult to understand
      - control coupling
          - two modules where one passes to the other a piece of information intended to control the internal logic of the other
          - disadvantages
              - leads to indirectness and obscurity
              - two modules are not independent
              - possibility of reuse is reduced
              - generally associated with modules that have logical cohesion
      - stamp coupling
          - two modules where one passes to the other a composite piece of data, that is a piece of data with a meaningful internal structure
          - disadvantages
              - the indirectness can cause a broad interface
              - data not necessary can be accessed by the module
      - data coupling
          - two modules that communicate by parameters, each parameter being an elementary piece of data
          - advantages
              - avoids sending unnecessary data
              - is direct and flexible
              - highly reusable
              - maintainable
      - comparisons

![Software%20Engineering%20Review%208bc4f0fcbb714399a3e662777c88bbe8/Screen_Shot_2020-08-25_at_7.31.00_PM.png](Software%20Engineering%20Review%208bc4f0fcbb714399a3e662777c88bbe8/Screen_Shot_2020-08-25_at_7.31.00_PM.png)

- modularity
      - high cohesion - functional or information
      - low coupling - data, stamp, control
      - cohesion's goal is to create a procedure that performs one functionally-related task
      - coupling's goal is to protect global data and local data from being used within a procedure without declaring it on the procedure's header
