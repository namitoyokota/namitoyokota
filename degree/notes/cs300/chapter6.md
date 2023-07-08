# CPU Scheduling

Date: February 27, 2020
Section: Chapter 6
Type: Textbook

## Terms
- gantt chart - a bart chart that illustrates a particular schedule, including the start and finish times of each of the participating processes
- starvation (indefinite blocking) - a process that is ready to run but waiting for the cpu can be considered blocked.
- aging - gradually increasing the priority of processes that wait in the system for a long time
- foreground processes - interative
- background processes - batch

## 6.1 Basic Concepts
- CPU-IO Burst Cycle
  - process execution consists of a cycle of cpu execution and io wait. processes alternate between these two states: cpu burst and io burst
- CPU Scheduler
  - **short-term scheduler** (cpu scheduler) - selects a process from the processes in memory that are ready to execute and allocates the cpu to that process (not necessarily fifo)
- Preemptive Scheduling
  - **nonpreemptive** (cooperative) - once the cpu has been allocated to a process, the process keeps the cpu until it releases the cpu either by terminating or by switching to the waiting state
  - **preemptive** - not nonpreemptive 🤗
  - dispatcher - the module that gives control of the cpu to the process selected by the short-term scheduler
    - switching context
    - switching to user mode
    - jumping to the proper location in the user program to restart

## 6.2 Scheduling Criteria
- cpu utilization - we want to keep the cpu as busy as possible
- throughput - number of processes that are completed per time unit
- turnaround time - the interval from the time of submission of a process to the time of completition
- waiting time - sum of periods spent waiting in the ready queue
- response time - time from the submission of a request until the first response is produced

## 6.3 Scheduling Algorithms
- FCFS - first come, first served
  - the process that requests the cpu first is allocated the cpu first
- SJF - shortest job first
  - the process that requires the least amount of time to complete is assigned
- Priority-Scheduling
  - a priority is associated with each process, and the cpu is allocated to the process with the highest priority. equal priority processes are scheduling in FCFS order
  - problem: starvation when a low priority process never gets to run
  - solution: aging
- Round Robin Scheduling
  - uses FCFS with time slice (time quantum)
- Multilevel Queue Scheduling
  - partitions the ready queue into several separate queues. the processes are permanently assigned to one queue. each queue has its own scheduling algorithm
  - order of priority
    1. system processes
    2. interactive processes
    3. interactive editing processes
    4. batch processes
    5. student processes
- Multilevel Feedback Queue Scheduling
  - same as Multilevel Queue Scheduling but allows a process to move between queues

## 6.4 Thread Scheduling
Contention Scope (threads to process kinda stuff)
- process-contention scope (PCS) - competition for the cpu takes place among threads belonging to the same process
- system-contention scope (SCS) - competition for the cpu takes place among all threads in the system

## 6.5 Multiple-Processor Scheduling
Approaches to Multiple-Processor Scheduling
- asymmetric multiprocessing - one processor accesses the system data data structures, reducing the need for data sharing
- symmetric multiprocessing - each processor is self-scheduling

Processor Affinity
- processor affinity - a process has an affinity for the processor on which it is currently running
- soft affinity - when an operating system has a policy of attempting to keep a process running on the same processor
- hard affinity - allows a process to specify a subset of processors on which it may run

Load Balancing
- load balancing - attempts to keep the workload evenly distributed across all processors. it is typically necessary only on system where each processor has its own private queue of eligible processes to execute
- 2 load balancing approaches
  - push migration - a specific task periodically checks the load on each processor and evenly distributes the load by moving processes from overloaded to idle or less-busy processors
  - pull migration - occurs when an idle processor pulls a waiting task from a busy processor
- multicore processor - each core maintains its architectural state and thus appears to the operating system to be a separate physical processor
- memory shall - when a processor accesses memory, it spends a significant amount of time waiting for the data to become available
- 2 ways to multithread a processing core
  - coarse-grained - a thread executes on a processor until a long-latency event such as memory stall occurs
  - fine-grained - switches between threads at a much finer level of granularity

## 6.8 Algorithm Evaluation
Deterministic Modeling
- analytic evaluation - uses the given algorithm and the system workload to produce a formula or number to evaluate the performance of the algorithm
- deterministic modeling - a type of analytic evaluation that takes a particular predetermined workload and defines the performance of each algorithm for that workload
- queueing-network analysis - an area of study on computational utilization like average queue length and average wait time
- little's formula: n = λ * W
