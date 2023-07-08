# Introduction

Date: January 9, 2020
Section: Chapter 1
Type: Textbook

> An **operating system** is a program that manages a computer's hardware. It also provides a basis for application programs and acts as an intermediary between the computer user and the computer hardware. Some operating systems are designed to be convenient, others to be efficient, and some others to be both.
    
## 1.1 - What Operating Systems Do
4 Components of a Computer System    
- hardware
- operating system
- application programs
- users

A **control program** manages the execution of user programs to prevent errors and improper use of the computer.    
**Moore's Law** predicted that the number of transistors on an integrated circuit would double every eighteen months.    
**Kernel** is the one program in the operating system that running at all times on the computer.

## 1.2 - Computer System Organization
**Bootstrap program** is an initial program that runs on a computer. It is stored in a read-only memory known as **firmware**. It knows how to load the operating system and how to start executing that system.
The occurrence of an event is usually signaled by an **interrupt** from either the hardware or the software. Hardware may trigger an interrupt at any time by sending a signal to the CPU. Software may trigger an interrupt by executing a special operation called a **system call**.    

**Von Neumann architecture**    
1. fetch an instruction from memory and store that instruction in the instruction register
2. instruction is then decoded and may cause operands to be fetched from memory and stored in some internal register

## 1.3 - Computer-System Architecture
**Single-Processor Systems**
until recently, most computer systems used a single processor. There is one main cpu capable of executing a general-purpose instruction set, including instructions from user processes.

**Multiprocessor Systems**
comes with three main advantages:
1. increased throughput - get more work done in less time
2. economy of scale - cost less than equivalent multiple single-processor systems
3. increased reliability - failure of one processor will not halt the system

**Two Types of Multiple-Processor Systems**
- asymmetric multiprocessing - each processor is assigned a specific task
- symmetric multiprocessing - each processor performs all tasks within the operating system

## 1.4 - Operating-System Structure
A **control program** manages the execution of user programs to prevent error and improper use of the computer. 
**Multiprogramming** increases cpu utilization by organizing jobs (code and data) so that the cpu always had one to execute.
**Time sharing** (multitasking) allows cpu to execute multiple jobs by switching among them, but the switches occur so frequently that the users can interact with each program while it is running.
**Process** is a program loaded into memory and executing.
**Swapping**  is where processes are swapped in and out of main memory to the disk.
**Virtual Memory** is a technique that allows the execution of a process that is not completely in memory. This enables users to run programs that are larger than actual physical memory.

## 1.5 - Operating-System Operations
A **trap** (exception) is a software-generated interrupt caused either by an error or by a specific request from a user program that an operating-system service be performed.
**Two Modes of Operation**
- user mode
- kernel mode
    
a bit, called the **mode bit**, is added to the hardware of the computer to indicate the current mode: kernel (0) or user (1).
A **timer** can be set to interrupt the computer after a specific period. 
    
## 1.6 - Process Management
the operating system is responsible for the following activities in connection with process management    
- scheduling processes and threads on the cpus
- creating and deleting both user and system processes
- suspending and resuming processes
- providing mechanisms for process synchronization
- providing mechanisms for process communication

## 1.7 - Memory Management
the operating system is responsible for the following activities in connection with memory management
- keeping track of which parts of memory are currently being used and who is using them
- deciding which processes and data to move into and out of memory
- allocation and deallocating memory space as needed

## 1.8 - Storage Management
the operating system is responsible for the following activities in connection with file management
- creating and deleting files
- creating and deleting directories to organize files
- supporting primitives for manipulating files and directories
- mapping files onto secondary storage
- backing up files on stable (nonvolatile) storage media

the operating system is responsible for the following activities in connection with disk management
- free-space management
- storage allocation
- disk scheduling

**caching** is a principle where information is copied into a faster storage system, cache, on a temporary basis.

## 1.9 - Protection and Security
**protection** is any mechanism for controlling the access of processes or users to the resources defined by a computer system.
**security** is any mechanism created to defend a system from external and internal attacks

## 1.10 - Kernel Data Structures
list
- singly linked list, doubly linked list, circularly linked list
- stack - LIFO, queue - FIFO

trees
- general tree, binary tree, binary search tree, balanced binary search tree
- hash functions and maps
- hash function - takes data as its input, performs a numeric operation on this data, and returns a numeric value
- hash map - associates pairs using a hash function

bitmaps
- a string of n binary digits that can be used to represent the status of n items
