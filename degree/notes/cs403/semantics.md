# Semantics

Date: January 15, 2020
Lecture: 4
Type: Lecture

- Terms
- Attribute Grammar

An **attribute grammar** is a context-free grammar with the following additions

- for each grammar symbol _x_ there is a set A(x) of attribute values, S(x) of synthesized, and I(X) of inherited

![Semantics%20a7e248c5b8ed4183abf4970f4d820df8/Screen_Shot_2020-02-15_at_4.39.58_PM.png](Semantics%20a7e248c5b8ed4183abf4970f4d820df8/Screen_Shot_2020-02-15_at_4.39.58_PM.png)



---

- **Dynamic Semantics**
      - operational semantics
      - denotational semantics
      - axiomatic semantics
- Operational Semantics
      - describes the meaning of a program by executing its statements on a machine, either simulated  or actual
      - the change in the state of the machine defines the meaning of the statement

![Semantics%20a7e248c5b8ed4183abf4970f4d820df8/Screen_Shot_2020-02-15_at_4.43.55_PM.png](Semantics%20a7e248c5b8ed4183abf4970f4d820df8/Screen_Shot_2020-02-15_at_4.43.55_PM.png)

- uses of operational semantics:
        - language manuals and textbooks
        - teaching programming languages

- Denotational Semantics
      - based on recursive function theory
      - the most abstract semantics description method
      - the process of building a denotational specification for a language:
          - define a mathematical object for each language entity
          - define a function that maps instances of the language entities onto instances of the corresponding mathematical objects
- Axiomatic Semantics
      - based on formal logic (predicate calculus)
      - original purpose: formal program verification
      - axioms or inference rules are defined for each statement type in the language
      - **assertions** - the logic expressions
      - **postcondition** - an assertion following a statement
      - **weakest precondition** - the least restrictive precondition that will guarantee the post condition
