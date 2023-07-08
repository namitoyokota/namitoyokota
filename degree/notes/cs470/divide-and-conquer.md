# Divide and Conquer

Date: January 9, 2020
Section: Chapter 4
Type: Textbook

## 4.3 the substitution method for solving recurrences

### da method

the substitution method for solving recurrences comprises two steps

1. guess the form of the solution
2. use mathematical induction to find the contacts and show that the solution works
   - making a good guess
         - there is no general way to make a good guess
         - you can use some heuristics to help you become a good guesser
         - you can also try recursion trees
         - if a recurrence looks similar, use a similar guess to the previous
         - another way is to prove loose upper and lower bounds then reduce the range of uncertainty
         - subtleties
             - the problem frequently turns out to be that inductive assumption is not strong enough to prove the detailed bound
             - mathematical induction does not work unless we prove the exact form of the inductive hypothesis

## 4.4 the recursion-tree method for solving recurrences

- in a recursion tree, each node represents the cost of a single subproblem somewhere in the set of recursive function invocations. we sum the costs within each level of the tree to obtain a set of per-level costs, and then we sum all the per-level costs to determine the total cost of all levels of the recursion

$T(n)=3T(n/4)+cn^2$

![Divide%20and%20Conquer%209c1801e4cad34bfebf53d042ef180f2e/Screen_Shot_2020-08-25_at_11.58.15_AM.png](Divide%20and%20Conquer%209c1801e4cad34bfebf53d042ef180f2e/Screen_Shot_2020-08-25_at_11.58.15_AM.png)

### 4.5 the master method for solving recurrences

- the master method provides a "cookbook" method for solving recurrences of the form
  - the master method depends on the master theorem
  - the master theorem

Let a≥1 and b>1 be constants, let f(n) be a function, and let T(n) be defined on the nonnegative integers by the recurrence

$T(n)=aT(n/b)+f(n)$

where we interpret n/b to mean either floor(n/b) or ceiling(n/b). then T(n) has the following asymptotic bounds:

1. look in the textbook
2. look in the textbook
3. look in the textbook
   - to use the master method, we simply determine which case (if any) of the master theorem applies and write down the answer
