# File-System Implementation

Date: April 11, 2020
Section: Chapter 12
Type: Textbook

## 14.1 File-System Structure
- layered file system
![File-System%20Implementation%208273cc4076364bf2ae0f5d7777ccc629/Screen_Shot_2020-04-11_at_2.17.43_PM.png](File-System%20Implementation%208273cc4076364bf2ae0f5d7777ccc629/Screen_Shot_2020-04-11_at_2.17.43_PM.png)
  - io control level consists of device drivers and interrupt handlers to transfer information between the main memory and the disk system
  - basic file system needs only to issue generic commands to the appropriate device driver to read and write blocks on the storage device
  - file-organization module knows about files and their logical blocks
  - logical file system manages metadata information. metadata includes all of the file-system structure except the actual contents of the files
  - file-control block (FCB) contains information about the file, including ownership, permissions, and location of the file contents

## 14.2 File-System Operations
- overview
  - file system
    - boot control block can contain information needed by the system to boot an operating system from that volume
      - in UFS, called the boot block
      - in NTFS, called the
    - volume control block contains volume details, such as the number of blocks in the volume, the size of the blocks, etc.
      - in UFS, called the superblock
      - in NTFS, stored in the master file table
  - in-memory
    - mount table contains information about each mounted volume
    - system-wide open-file table contains a copy of the FCB of each open file
    - per-process open-file table contains pointers to the appropriate entries in the system-wise open-file table for all files the process has open

## 14.3 Directory Implementation
- linear list
  - the simplest method of implementing a directory is to use a linear list of file names with pointers to the data blocks
  - this method is simple to program but time-consuming to execute
- hash table
  - another data structure used for a file directory is a hash table
  - a linear list stores the directory entries, but a hash data structure is also used
  - the hash table takes a value computed from the file name and returns a pointer to the file name in the linear list

## 14.4 Allocation Methods
- contiguous allocation
  - contiguous allocation requires that each file occupy a set of contiguous blocks on the device
  - problems
    - finding space for a new file
    - suffer from external fragmentation
    - determining how much space if needed for a file
  - solutions
    - copy an entire file system onto another device. the original device is then freed completely, creating one large contiguous free space
  - the contiguous-allocation problem can be seen as particular allocation of the dynamic storage-allocation problem which involves how to satisfy a request of size n from a list of free holes
- linked allocation
  - linked allocation solves all problems of contiguous allocation
  - with linked allocation, each file is a linked list of storage blocks; the blocks may be scatted anywhere on the device
  - problem
  - it can be used effectively only for sequential-access files
  - the space required for the pointers
  - solution
    - collect blocks into multiples, called clusters, and to allocate clusters rather than blocks
  - FAT
    - an important variation on linked allocation is the use of file-allocation table (FAT)
    - a section of storage at the beginning of each volume is set aside to contain the table
    - the table has one entry for each block and is indexed by block number
- indexed allocation
  - indexed allocation solves the problem of external fragmentation and size declaration by bringing all the pointers together into one location: the index block
  - each file has its own index block, which is an array of storage-block addresses
  - how large should the index block be? mechanism

linked scheme. an index block is normally one storage block. thus, it can be read and written directly by itself. to allow for large files, we can link together several index blocks
- linked scheme
  - an index block is normally one storage block
  - thus, it can be read and written directly by itself
  - to allow for large files, we can link together several index blocks
- multilevel index
  - a variant of linked representation uses a first-level index block to point to a set of second-level index blocks, which in turn points to the file blocks
  - to access a block, the operating system uses the first-level index to find a second-level index block and then uses that block to find the desired data block
- combined scheme
  - another alternative is to keep the first, say 15 pointers of the index block in the file's inode
  - the first 12 of these pointers point to direct blocks (contains addresses of blocks that contain data of the file)
  - next three pointers point to indirect blocks
  - the first points to a single indirect block, which is an index block containing not the data but the addresses of blocks that do contain data
  - the second points to a double indirect block, which contains the address of a block that contains the addresses of blocks that contain pointers to the actual data blocks
  - the last pointer contains the address of a triple indirect block

## 14.5 Free-Space Management
- intro
  - to keep track of free disk space, the system maintains a free-space list
  - the free-space list records all free device blocks - those not allocated to some file or directory
- bit vector
  - frequently, the free-space list is implemented as a bitmap or bit vector
  - each block is represented by 1 bit. if the block is free, the bit is 1; if the block is allocated, the bit is 0
- linked list
  - another approach to free-space management is to link together all the free blocks, keeping a pointer to the first free block in a special location in the file system and caching it in memory
- grouping
  - a modification of the free-list approach stores the addresses of n free blocks in the first free block
- counting
  - another approach takes advantage of the fact that, generally, several contiguous blocks may be allocated or freed simultaneously
  - thus, we can keep the address of the first free block and the number of free contiguous blocks that follow the first block

## 14.6 Efficiency and Performance
- efficiency
  - the efficient use of storage device space depends heavily on the allocation and directory algorithms in use
- performance
  - some systems maintain a separate section of main memory for a buffer cache
  - other systems cache file data using a page cache
  - some systems use page caching to cache both process pages and file data. this is known as unified virtual memory
  - double caching is a situation where it requires caching file-system data twice
  - synchronous write occur in the order in which the storage subsystem receives them, and the writes are not buffered
  - in an asynchronous write, the data are stored in the cache, and control returns to the caller
  - free-behind removes a page from the buffer as soon as the next page is requested
  - with read-ahead, a requested page and several subsequent pages are read and cached
- OSTEP 40.2 and 40.3 Inodes
- OSTEP 40.4 Directory Organization
