# Language Evaluation

Date: January 10, 2020
Lecture: 2
Type: Lecture

- Terms
      - **lexical analysis** - converts characters in the source program into lexical units
      - **syntax analysis** - transforms lexical units into parse trees which represent the syntactic structure of program
      - **semantics analysis** - generate intermediate code
      - **code generation** - machine code is generated
      - **bottleneck** - the connection speed between a computer's memory and its processor

---

- **Language Evaluation Criteria**
      - **readability** - the ease with which programs can be read and understood
      - **writability** - the ease with which a language can be used to create programs
      - **reliability** - conformance to specifications
      - **cost** - the ultimate total cost
- Readability
      - overall simplicity - minimal set features, constructs, multiplicity, operator overloading
      - orthogonality - small set of primitive constructs
      - data types - adequate predefined data types
      - syntax considerations - flexible identifier form compositions, special words and methods (meaningful keywords)
- Writability
      - simplicity and orthogonality - few constructs, small number of primitives, small set of rules for combining them
      - support for abstraction - ability to define and use complex structures
      - expressivity - set of convenient ways of specifying operations
- Reliability
      - type checking - testing for type errors
      - exception handling - intercept runtime errors
      - aliasing - two or more distinct referencing methods for the same memory location
      - readability and writability - use of unnatural approaches
- Cost
      - training programmers to use the language
      - writing programs
      - compiling programs
      - executing programs
      - language implementation system (availability of free compilers)
      - reliability - poor reliability leads to high costs
      - maintaining programs
- Others
      - portability - the ease with which programs can be moved from one implementation to another
      - generality - the applicability to a wide range of applications
      - well-definedness - the completeness and precision of the language's official definition

---

- **Implementation Methods**
      - compilation - programs are translated into machine language
      - pure interpretation - programs are interpreted by another program known as interpreter
      - hybrid implementation systems - a compromise between compilers and pure interpreters
- Compilation

![Language%20Evaluation%20f01b7c4450e34143bf40ef7ab6bd4950/Screen_Shot_2020-02-15_at_4.05.05_PM.png](Language%20Evaluation%20f01b7c4450e34143bf40ef7ab6bd4950/Screen_Shot_2020-02-15_at_4.05.05_PM.png)

- translate high-level program into machine code
      - slow translation, fast execution

- Pure Interpretation

![Language%20Evaluation%20f01b7c4450e34143bf40ef7ab6bd4950/Screen_Shot_2020-02-15_at_4.10.32_PM.png](Language%20Evaluation%20f01b7c4450e34143bf40ef7ab6bd4950/Screen_Shot_2020-02-15_at_4.10.32_PM.png)

- no translation
      - easier implementation of programs (runtime errors can easily and immediately be displayed)
      - slower execution
      - often requires more space

- Hybrid Implementation Systems

![Language%20Evaluation%20f01b7c4450e34143bf40ef7ab6bd4950/Screen_Shot_2020-02-15_at_4.12.50_PM.png](Language%20Evaluation%20f01b7c4450e34143bf40ef7ab6bd4950/Screen_Shot_2020-02-15_at_4.12.50_PM.png)

- a compromise between compilers and pure interpreters
      - a high-level language program is translated to an intermediate language that allows easy interpretation
      - faster than pure interpretation

- Just-in-Time Implementation System
      - initially translate programs to an intermediate language
      - then compile the intermediate language of the subprograms into machine code when they are called
      - machine code version is kept for subsequent
