# Threads

Date: February 4, 2020
Section: Chapter 4
Type: Textbook

## 4.1 Overview
a **thread** is a basic unit of cpu utilization; it comprises a thread id, a program counter, a register set, and a stack
    
**Two Types Threaded Processes**
![Threads%2007f4ad77b5b147a7906630e58257bce4/Screen_Shot_2020-02-04_at_3.05.17_PM.png](Threads%2007f4ad77b5b147a7906630e58257bce4/Screen_Shot_2020-02-04_at_3.05.17_PM.png)
1. Single-Threaded Process
2. Multi-Threaded Process

**Benefits in Multithreaded Programming**
- responsiveness - multithreading an interactive application may allow a program to continue running even if part of it is blocked or is performing a lengthy operation
- resource sharing - processes can only share resources through techniques such as shared memory and message passing
- economy - allocating memory and resources for process creation is costly
- scalability - threads may be running in parallel on different processing cores

## 4.2 Multicore Programming
**multicore**/**multiprocessor** system is a system design where multiple computing cores are placed on a single chip
- a system is parallel if it can perform more than one task simultaneously
- a concurrent system supports more than one task by allowing all the tasks to make progress

it is possible to have concurrency without parallelism

**5 Challenges in Programming for Multicore Systems**
1. identifying tasks - examining applications to find areas that can be divided into separate, concurrent tasks
2. balance - identify tasks that can run in parallel while also ensuring that the tasks perform equal work of equal value
3. data splitting - data accessed and manipulated by the tasks must be divided to run on separate cores
4. data dependency - data accessed by the tasks must be examined for dependencies between two or more tasks
5. testing and debugging - testing and debugging concurrent programs

**Types of Parallelism**
- **data parallelism** - focuses on distributing subjects of the same data across multiple computing cores and performing the same operation on each core
- **task parallelism** - involves distributing not data but tasks (threads) across multiple computing cores

## 4.3 Multithreading Models
support for threads may be provided either at the user level (**user threads**) or by the kernel (**kernel threads**)

**Many-to-One Model**
![Threads%2007f4ad77b5b147a7906630e58257bce4/Screen_Shot_2020-02-04_at_3.15.45_PM.png](Threads%2007f4ad77b5b147a7906630e58257bce4/Screen_Shot_2020-02-04_at_3.15.45_PM.png)
thread management is done by the thread library in user space, so it is efficient. however, the entire process will block if a thread makes a blocking system call

**One-to-One Model**
![Threads%2007f4ad77b5b147a7906630e58257bce4/Screen_Shot_2020-02-04_at_3.17.19_PM.png](Threads%2007f4ad77b5b147a7906630e58257bce4/Screen_Shot_2020-02-04_at_3.17.19_PM.png)
it provides more concurrency than the many-to-one model by allowing another thread to run when a thread makes a blocking system call. it also allows multiple threads to run in parallel on multiprocessors

**Many-to-Many Model**
![Threads%2007f4ad77b5b147a7906630e58257bce4/Screen_Shot_2020-02-04_at_3.19.03_PM.png](Threads%2007f4ad77b5b147a7906630e58257bce4/Screen_Shot_2020-02-04_at_3.19.03_PM.png)
the number of kernel threads may be specific to either a particular application or a particular machine. this model does not allow true concurrency because the kernel can schedule only one thread at a time.

## 4.4 Thread Libraries
a **thread library** provides the programmer with an api for creating and managing threads
**pthreads** refers to the POSIX standard defining an api for thread creation and synchronization

## 4.6 Threading Issues
a **signal** is used in UNIX systems to notify a process that a particular event has occurred. a signal may be received either synchronously or asynchronously, depending on the source of and the reason for the event being signaled
**thread cancellation** involves terminating a thread before it has completed.
a thread that is to be canceled is often referred to as the **target thread**.
