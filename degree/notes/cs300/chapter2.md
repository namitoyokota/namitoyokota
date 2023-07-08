# Operating-System Structures

Date: February 4, 2020
Section: Chapter 2
Type: Textbook

## 2.1 Operating-System Services
- user interface
- program execution
- i/o operations
- file-system manipulation
- communications
- error detection
- resource allocation
- accounting - keep track of who, what, and how users use resources
- protection and security

**shared memory** is where two or more processes read and write to a shared section of memory in which packets of information is predefined formats are moved between processes by the operating system

## 2.2 User and Operating-System
- command line interface
- graphic user interface

## 2.3 System Calls
**system calls** provide an interface to the services made available by an operating system
**application programming interface (api)** - specifies a set of functions that are available to an application programmer
**system-call interface** is a link to system calls made available by the operating system

## 2.4 Types of System Calls
### process control
a running program needs to be able to halt its execution either normally or abnormally
- file management
- device management
- information maintenance
- communication
- protection

## 2.5 System Programs
**system programs** provide a convenient environment for program development and execution
- file management
- status information
- file modification
- programming-language support
- program loading and execution
- communications
- background services

## 2.6 Operating-System Design and Implementation
design goals can be divided into two basic groups: user goals and system goals
    
## 2.7 Operating-System Structure
**Simple Structure**
many operating systems do not have well-defined structures. ex. MS-DOS

**Layered Approach**
layered approach is a method in which the operating system is broken into a number of layers. bottom layer is the hardware and the highest is the user interface.
    
**Microkernels**
microkernel method structures the operating system by removing all nonessential components from the kernel and implementing them as system and user-level programs.
    
**Modules**
the best current methodology for operating-system design involves using loadable kernel modules. the kernel has a set of core components and inks in additional services via modules.
    
## 2.9 Operating-System Generation

## 2.10 System Boot
the procedure of starting a computer by loading the kernel is known as **booting** the system. on most computer systems, a small piece of code known as the **bootstrap program** locates the kernel, loads it into main  memory, and starts its execution.
