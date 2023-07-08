# Syntax

Date: January 13, 2020
Lecture: 3
Type: Lecture

- Terms
      - **syntax** - the form or structure of the expressions, statements, and program units
      - **semantics** - the meaning of the expressions, statements, and program units
      - **sentence** - a string of characters over some alphabet
      - **language** - a set of sentences
      - **lexeme** - the lowest level syntactic unit of a language (\*, sum, begin, 12.3)
      - **token** - a category of lexemes (identifier)
- Formal Definition of Languages
      - **recognizers** - a recognition device reads input strings over the alphabet of the language and decides whether the input strings belong to the language
      - **generators** - a device that generate sentences of a language
- BNF and Context-Free Grammars
      - **context-free grammars** - developed by Noam Chomsky in the mid-1050s
      - **backus-naur form** - invented by John Bakus in 1959 to describe the syntax of Algol 58
- BNF
      - **derivation** - a repeated application of rules, starting with the start symbol and ending with a sentence
      - **grammar -** a finite non-empty set of rules
      - abstractions are used to represent classes of syntactic structures
      - a grammar is _ambiguous_ if an only if it generates a sentential form that has two or more distinct parse trees
- EBNF
      - a few simple extensions to BNF which makes expressing grammars more convenient
      - options parts are placed in brackets
      - alternative pats of RHSs are placed inside parentheses
      - repetitions are placed inside braces
-
