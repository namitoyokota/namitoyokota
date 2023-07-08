# Processes

Date: February 4, 2020
Section: Chapter 3
Type: Textbook

## 3.1 Process Concept
### Process
**process** is a program in execution

**Program vs Process**
- a program is a passive entity, such as a file containing a list of instructions stored on disk
- a process is a active entity, with a program counter specifying the next instruction to execute and a set of associated resources

**Process State**
![Processes%20d710613b03c540d0b44a15a4a2a69cea/Screen_Shot_2020-02-04_at_12.57.24_PM.png](Processes%20d710613b03c540d0b44a15a4a2a69cea/Screen_Shot_2020-02-04_at_12.57.24_PM.png)
- new - the process is being created
- running - instructions are being executed
- waiting - the process is waiting for some event to occur
- ready - the process is waiting to be assigned to a processor
- terminated - the process has finished execution

**PCB**
each process is represented in the operating system by a **process control block** (pcb). it contains these pieces of info:
- process state
- program counter - the address of next instruction
- cpu registers
- cpu-scheduling information - process priority, pointers to scheduling queues, and more
- memory-management information - base and limit registers and the page tables, or the segment tables
- accounting information - amount of cpu and real time used, time limits, account numbers, etc.
- i/o status information - i/o allocated, list of open files, etc.

## 3.2 Process Scheduling
**Scheduling Queues**
![Processes%20d710613b03c540d0b44a15a4a2a69cea/Screen_Shot_2020-02-04_at_1.02.02_PM.png](Processes%20d710613b03c540d0b44a15a4a2a69cea/Screen_Shot_2020-02-04_at_1.02.02_PM.png)
**job queue** consists of all processes in the system.
**ready queue** is a list of processes that are residing in main memory and are ready and waiting to execute
**device queue** is the list of processes waiting for a particular i/o device 

**Schedulers**
**long-term scheduler** (job scheduler) selects processes from this pool and loads them into memory for execution
**short-term scheduler** (cpu scheduler) selects from among the processes that are ready to execute and allocates the cpu to one of them.
**i/o-bound process** is one that spends more of its time doing i/o than it spends doing computations.    
**cpu-bound process** generates o/o requests infrequently, using more of its time doing computations.
**medium-term scheduler** is the idea that sometimes it can be advantageous to remove a process from memory and thus reduce the degree of multiprogramming
**swapping** is the process of a process being stopped and executed later

**Context Switch**
**context switch** is the process of switching the cpu to another process by performing a state save of the current process and a state restore of a different process.
    
## 3.3 Operations on Processes
**Process Creation**
each of new processes may in turn create other processes, forming a tree of processes.
most operating systems identify processes according to a unique **process identifier** (pid), which is typically an integer number.

two execution possibilities for a new process
1. the parent continues to execute concurrently with its children
2. the parent waits until some of all of its children have terminated

two address-space possibilities for a new process
1. the child process is a duplicate of the parent process
2. the child process has a new program loaded into it

## 3.4 Interprocess Communication
a process is **independent** if it cannot affect or be affected by the other processes executing in the system
a process is **cooperating** if it can affect or be affected by the other processes executing in the system

process cooperations provides the following advantages
- information sharing - allows concurrent access to the same piece of information
- computation speedup - executing tasks in parallel with the others results in faster runtime
- modularity - we may want to construct the system in modular fashion, dividing the system functions into separate processes or threads
- convenience - even an individual user may work on many tasks at the same time

cooperating processes require an **interprocess communication** (ipc) mechanism that will allow them to exchange data and information.

**Two Types of Interprocess communication**
- shared memory
a region of memory that is shared by cooperating processes is established. processes can then exchange information by reading and writing data to the shared region
- message passing
communication takes place by means of messages exchanged between the cooperating processes

## 3.5 Examples of IPC Systems (3.5.1) 
