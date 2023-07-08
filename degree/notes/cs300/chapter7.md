# Deadlocks

Date: February 27, 2020
Section: Chapter 7
Type: Textbook

## Terms
- deadlock - a process is never again able to change state from waiting, because the resources it has requested are held by other waiting processes

## 7.1 System Model
sequence of utilizing a resource
1. request - the process request the resource
2. use - the process can operate on the resource
3. release - the process releases the resource

## 7.2 Deadlock Characterization
Necessary Conditions
1. mutual exclusion - only one process at a time can use the resource
2. hold and wait - a process must be holding at least one resource and waiting to acquire additional resources
3. no preemption - resources cannot be preempted
4. circular wait - a set of waiting processes must exist such that the last process is waiting for a resource held by the first

Resource-Allocation Graph
- system resource-allocation graph - deadlocks described more precisely in terms of a directed graph
- request edge - process ⇒ resource
- assignment edge - resource ⇒ process

## 7.3 Methods for Handling Deadlocks
general methods for dealing with deadlock problem
- use a protocol to prevent or avoid deadlocks (ensure that the system will never enter a deadlocked state)
- allow the system to enter a deadlocked state, detect it, and recover
- ignore the problem altogether and pretend that deadlocks never occur in the system

- deadlock prevention - provides a set of methods to ensure that at least one of the necessary conditions cannot hold
- deadlock avoidance - requires that the operating system be given additional information in advance concerning which resources a process will request and use during its lifetime

## 7.4 Deadlock Prevention
- by ensuring that at least one of these conditions cannot hold, we can prevent the occurrence of a deadlock

Mutual Exclusion
- condition: at least one resource must be non-sharable
- solution: sharable resources

Hold and Wait
- condition: whenever a process requests a resource, it does not hold any other resources
- solution: require each process to request and be allocated all its resources before it begins execution
- solution: allow a process to request resources only when it has none

No Preemption
- condition: there is no preemption of resources that have already been allocated
- solution: if a process is holding some resources and requests another resource that cannot be immediately allocated to it, then all resources the process is currently holding are preempted
- solution: if a process requests some resources, we first check whether they are available. if they are, we allocate them. if they are not, we check whether they allocated to some other process that is waiting from additional resources

Circular Wait
- condition: wait array with the last element pointed to the first
- solution: impose a total ordering of all resource types and to require that each process requests resources in an increasing order of enumeration

## 7.5 Deadlock Avoidance
-  require additional information about how resources are to be requested

Safe State
- a state is safe if the system can allocate resources to each process in some order and still avoid deadlock

- safe sequence
- Resource-Allocation-Graph Algorithm
- claim edge - a process may request resource at some time in the future
- Banker's Algorhtm
- summary
- data structures to implement the banker's algorithm
  - available - a vector of length m that indicates the number of available resources of each type
  - max - an n x m matrix defines the maximum demand of each process
  - allocation - an n x m matrix defines the number of resources of each type currently allocated to each process
  - need - an n x m matrix indicates the remaining resource need of each process
- safety algorithm - finding whether or not a system is in a safe state. this algorithm may require an order of m x n^2 operations to determine whether a state is safe
- resource-request algorithm - algorithm for determining whether requests can be safely granted

## 7.6 Deadlock Detection
- Single Instance of Each Resource Type
  - wait-for graph - a variant of the resource-allocation graph obtained by removing the resource nodes and collapsing the appropriate edges
- Several Instances of a Resource Type
- Detection-Algorithm Usage

## 7.7 Recovery from Deadlock
Process Termination
- abort all deadlocked processes
- abort one process at a time until the deadlock cycle is eliminated
- factors into which process is chosen
  1. what the priority of the process is
  2. how long the process has computed and how much longer the process will compute before completing its designated task
  3. how many and what types of resources the process has used (for example, whether the resources are simple to preempt)
  4. how many more resources the process needs in order to complete
  5. how many processes will need to be terminated
  6. whether the process is interactive or batch

Resource Preemption
- issues to be addressed
  1. selecting a victim - which resources and which processes are to be preempted?
  2. rollback - if we preempt a resource from a process, what should be done with that process?
  3. starvation - how do we ensure that starvation will not occur?
