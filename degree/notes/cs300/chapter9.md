# Virtual Memory

Date: April 7, 2020
Section: Chapter 9
Type: Textbook

## 9.1 Background
- virtual memory involves the separation of logical memory as perceived by users from physical memory
- the virtual address space of a process refers to the logical (or virtual) view of how a process is stored in memory
- it is up to the memory-management unit (MMU) to map logical pages to physical page frames in memory
- virtual address spaces that include holes are known as sparse address spaces. using this is beneficial because the holes can be filled as the stack or heap segments grow

## 9.2 Demand Paging
- intro
  - demand paging is a common strategy used in virtual memory systems where you load pages only as they are needed
  - pages are loaded only when they are demanded during program execution therefore pages that are never accessed are never loaded into physical memory
  - a lazy swapper never swaps a page into memory unless that page will be needed
  - a swapper manipulates entire processes, whereas a pager is concerned with the individual pages of a process.
- basic concepts
  - when a process is to be swapped in, the pager guesses which pages will be used before the process is swapped out again. instead of swapping in a whole process, the pager brings only those pages into memory
  - access to a page marked invalid caused a page fault
  - procedure for handling page fault
    1. check an internal table whether the reference was valid or invalid memory access
    2. if invalid, terminate. if valid, page it in
    3. find a free frame
    4. schedule a disk operation to read the desired page into newly allocated frame
    5. modify the internal table to indicate that the page is now in memory
    6. restart the instruction
  - pure demand paging is a scheme that never brings a page into memory until it is required and is in a stage where no more faults can be executed with the process
  - hardware for demand paging support (same as paging and swapping)
    - page table
    - secondary memory (swap space)
  - performance of demand paging: EffectiveAccesstime=(1-p)*ma+p*PageFaultTime

## 9.3 Copy-on-Write
- copy-on-write is a technique which works by allowing the parent and child process initially to share the same pages
- operating systems typically allocate these pages using a technique known as zero-fill-out-demand where the pages have been zeroed-out before being allocated, thus erasing the previous contents

## 9.4 Page Replacement
- basic page replacement
  - page replacement is the most common solution to the over-allocating of memory caused by increase in degree of programming
  - page replacement approach
    1. find the location of the desired page on the disk
    2. find a free frame
    3. read the desired page into the newly freed frame; change the page and frame tables
    4. continue the use process from where the page fault occured
      - modify bit (dirty bit) is a scheme which indicates that the page has been modified or not to reduce overhead
      - frame-allocation algorithm decides how many frames to allocate to each process
      - page-replacement algorithm selects the frames that are to be replaced
      - reference string is the string of memory references
      - fifo page replacement
        - the simplest page-replacement algorithm is a first-in, first-out (FIFO) algorithm
        - it associates with each page with each page the time when the page was brought into memory and when a page must be replaced, the oldest page is chosen
        - belady's anomaly is an unexpected result for some page-replacement algorithms where the page-fault rate may increase as the number of allocated frames increases
      - optimal page replacement
        - optimal page-replacement algorithm is an algorithm that has the lowest page-fault rate of all algorithms and will never suffer from belady's anomaly
      - lru page replacement
        - least recently used (LRU) algorithm replaces the page that has not been used for the longest period of time
        - stack algorithm is an algorithm for which it can be shown that the set of pages in memory for n frames is always a subset of the set of pages that would be in memory with n+1 frame
        - stack algorithms can never exhibit belady's anomaly
      - counting-based page replacement
        - we can keep a counter of the number of references that have been made to each page and develop the following two schemes
        - least frequently used (LFU) page-replacement algorithm requires that the page with the smallest count be replaced
        - most frequently used (MFU) page-replacement algorithm is based on the argument that the page with the smallest count was probably just brought in and has yet to be used

## 9.5 Allocation of Frames
- allocation algorithms
  - equal allocation works so that each process will get the same amount of frames
  - proportional allocation allocates available memory to each process according to its size
- global vs local allocation
  - global replacement allows a process to select a replacement frame from the set of all frames (even if that frame is currently allocated to some other process)
  - local replacement requires that each process select from only its own set of allocated frames
- non-uniform memory access
  - non-uniform memory access (NUMA) systems are systems in which memory access times vary significantly
  - lgroups (latency groups) gathers together close CPUs and memory

## 9.6 Thrashing
- intro
  - thrashing is a high paging activity where a process is spending more time paging than executing
- cause of thrashing
  - local replacement algorithm (priority replacement algorithm) limits the effects of thrashing. with it, if one process starts thrashing, it cannot steal frames from another process and cause the latter to thrash as well
- working-set model
  - the working-set model is based on the assumption of the locality
  - this model uses a parameter, △, to define the working-set window
  - the set of pages in the most recent △ page reference is the working set
- page-fault frequency
  - page-fault frequency (PFF) takes a more direct approach compared to the working-set model
  - by establishing the upper and lower bounds on the desired page-fault rate,
  - if the actual page-fault rate exceeds the upper limit, we allocate the process another frame
  - if the page-fault falls below the lower limit, we remove a frame from the process

## 9.7 Memory-Mapped Files
- intro
  - memory mapping allows a part of the virtual address space to be logically associated with the file
  - basic mechanism
  - memory mapping a file is accomplished by mapping a disk block to a page in memory. initial access to the file proceeds through ordinary demand paging, resulting in a page fault. however, a page-size portion of the file is read from the file system into a physical page
  - memory-mapped io
  - in memory-mapped io, ranges of memory addresses are set aside and are mapped to the device registers
  - io port is an device which cpu uses to transfer data through by reading and writing a few device registers
  - programmed io (PIO) is a method of operation where the cpu uses polling to watch the control bit, constantly looping to see whether the device is ready

## 9.8 Allocating Kernel Memory
- buddy system
  - the buddy system allocates memory from a fixed-size segment consisting of physically contiguous pages
  - memory is allocated from this segment using a power-of-2 allocator, which satisfies requests in units sized as a power of 2
  - the segment is initially divided into two buddies, and later further into more buddies
  - an advantage of the buddy system is how quickly adjacent buddies can be combined to form larger segments using a technique known as coalescing
- slab allocation
  - slab allocation is another strategy for allocating kernel memory
  - a slab is made up of one or more physically contiguous pages
  - a cache consists of one or more slabs
  - each cache is populated with objects that are instantiations of the kernel data structure the cache represents
  - a slab may be in one of three possible states
    - full: all objects in the slab are marked as used
    - empty: all objects in the slab are marked as free
    - partial: the slab consists of both used and free objects
  - benefits of slab allocator
    - no memory is wasted due to fragmentation
    - memory requests can be satisfied quickly

## 9.9 Other Considerations
- prepaging
  - prepaging is an attempt to prevent a large number of page faults that occur when a process is started
  - the strategy is to bring into memory at one time all the pages that will be needed
- tlb reach
  - tlb reach refers to the amount of memory accessible from the tlb and is simply the number of entries multiplied by the page size
- inverted page tables
- program structure
- io interlock and page locking
  - when demand paging is used, we sometimes need to allow some of the pages to be locked in memory
