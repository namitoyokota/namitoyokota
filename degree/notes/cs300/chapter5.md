# Process Synchronization

Date: February 27, 2020
Section: Chapter 5
Type: Textbook

## Terms
- atomically - as on uninterruptible unit

## Introduction
- a cooperating process is one that can affect or be affected by other processes executing in the system

## 5.1 Background
- **race condition** is a situation where several processes access and manipulate  the same data concurrently and the outcome of the execution depends on the particular order in which the access takes place.

## 5.2 The Critical-Section Problem
- **critical section** - segment of code in which the process may be changing common variables, updating table, writing a file, and so on

Solution Requirements
1. mutual exclusion - if a process is executing in its critical section, then no other processes can be executing in their critical sections
2. progress - processes that are not executing can participate in deciding which will enter next
3. bounded waiting - a limit on the number of times other processes are entered before your request is granted

Solutions in Operating System
- **preemptive kernels** - allows a process to be preempted while it is running in kernel mode
- **nonpreemptive kernels** - does not allow a process running in kernel mode to be preempted

## 5.3 Peterson's Solution
- **peterson's solution** - a classic software-based solution to be the critical-section problem.
- it requires two data items, turn and flag. turn stores the index of the process that is allowed to execute. the flag array is used to indicate if a process is ready to enter its critical section. to enter the critical section, process sets the flag to be true at its index and then sets turn to the next index.

## 5.4 Synchronization Hardware
- solutions based on the premise of locking
- test_and_set()
- compare_and_swap()

## 5.5 Mutex Locks
- **mutex lock** - a hardware-based tool designed by the operating-system designers to solve the critical-section problem and prevent race conditions
- functions
- *acquire* function acquires the lock

![Process%20Synchronization%207d568342914e47549e74683325e2f790/Screen_Shot_2020-02-27_at_5.48.24_PM.png](Process%20Synchronization%207d568342914e47549e74683325e2f790/Screen_Shot_2020-02-27_at_5.48.24_PM.png)
![Process%20Synchronization%207d568342914e47549e74683325e2f790/Screen_Shot_2020-02-27_at_5.48.32_PM.png](Process%20Synchronization%207d568342914e47549e74683325e2f790/Screen_Shot_2020-02-27_at_5.48.32_PM.png)

- **busy waiting** (spin lock) - while a process is in its critical section, any other process that tries to enter its critical section must loop continuously

## 5.6 Semaphores
- **semaphore** - an integer variable that, apart from initialization, is accessed only through two standard atomic operations: wait() and signal()
- functions
  - wait
  - signal
- semaphore usage
  - **counting semaphore** - range over an unrestricted domain
  - **binary semaphore** - range only between 0 and 1 (similar to mutex)
- deadlocks and starvation
  - **deadlocks** - where two or more processes are waiting indefinitely for an event that can be caused only by one of the waiting processes
  - **starvation** - a situation in which processes wait indefinitely within the semaphore
- priority inversion
  - **priority inversion** - when a higher-priority process needs to read or modify kernel data that are currently being accessed by a lower-priority process
  - **priority-inheritance protocol** - all processes that are accessing resources needed by a higher-priority process inherit the higher priority until they are finished with the resources in question

## 5.7 Classic Problems of Synchronization
- **readers-writers problem** - if a writer and some other process (either a reader or a writer) access the database simultaneously
- **dining-philosophers problem** - five philosophers in a circular table and a bowl of rice in the middle. there are chopsticks one to the left and to the right of each philosopher. when they are hungry, they grab chopsticks without talking to the others but you can only pick up one at a time.
- solution: a philosopher tries to grab a chopstick by executing a wait() operation on that semaphore. she release her chopsticks by executing the signal() operation on the appropriate semaphores

## 5.8 Monitors
- monitor - a fundamental high-level synchronization construct developed to deal with errors generated during process synchronization
- abstract data type (ADT) - encapsulates data with a set of functions to operate on that data that are independent of any specific implementation of the the ADT
- monitor type - an ADT that includes a set of programmer-defined operations that are provided with mutual exclusion within the monitor

## 5.9 Synchronization Examples (5.9.4)
![Process%20Synchronization%207d568342914e47549e74683325e2f790/Screen_Shot_2020-02-27_at_6.35.25_PM.png](Process%20Synchronization%207d568342914e47549e74683325e2f790/Screen_Shot_2020-02-27_at_6.35.25_PM.png)
![Process%20Synchronization%207d568342914e47549e74683325e2f790/Screen_Shot_2020-02-27_at_6.35.15_PM.png](Process%20Synchronization%207d568342914e47549e74683325e2f790/Screen_Shot_2020-02-27_at_6.35.15_PM.png)
![Process%20Synchronization%207d568342914e47549e74683325e2f790/Screen_Shot_2020-02-27_at_6.34.57_PM.png](Process%20Synchronization%207d568342914e47549e74683325e2f790/Screen_Shot_2020-02-27_at_6.34.57_PM.png)
