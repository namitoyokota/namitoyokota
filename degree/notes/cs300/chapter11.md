# File-System Interface

Date: April 11, 2020
Section: Chapter 11
Type: Textbook

## 13.1 File Concept
- intro
  - a file is a named collection of related information that is recorded on secondary storage
  - a text file is a sequence of characters organized into lines
  - a source file is a sequence of functions, each of which is further organized as declarations followed by executable statements
  - an executable file is a series of code sections that the loader can bring into memory and execute
- file attributes
  - name
  - identifier
  - type
  - location
  - size
  - protection
  - time, date, and user identification
- file operations
  - creating a file
    - first, space in the file system must be founded for the file
    - second, an entry for the new file must be made in the directory
  - writing a file
    - we make a system call specifying both the name of the file and the information to be written to the file
    - given the name of the file, the system searches the directory to find the file's location
    - the system must keep a write pointer to the location in the file where the next write is to take place
    - the write pointer must be updated whenever a write occurs
  - reading a file
    - we use a system call that specifies the name of the file and where (in memory) the next block of file should be put
    - the directory is searched for the associated entry, and the system needs to keep a read pointer to the location in the file where the next read is to take place
    - once the read has taken place, the read pointer is updated
    - because a process is usually either reading/write to a file, the current operation location can be kept as a per-process current-file-position pointer
    - both the read and write operations use this same pointer
    - repositioning within a file
    - the directory is searched for the appropriate entry, and the current-file-position pointer is repositioned to a given value
    - this file operation is also know as a file seek
  - deleting a file
    - we search the directory for the named file
    - having found the associated directory entry, we release all file space, so that it can be reused by other files, and erase the directory entry
    - truncating a file
    - the user may want to erase the contents of a file but keep its attributes
    - instead of deleting and recreating the file, this function allows all attributed to remain unchanged except the file length and releases its file space
    - other info related to file operations
    - the operating system keeps a table, called the open-file table, containing information about all open files
    - the open-file table also has an open count associated with each file to indicate how many processes have the file open
  - open file information
    - file pointer
    - file-open count
    - disk location of the file
    - access rights
    - a shared lock is akin to a reader lock in that several processes can acquire the lock concurrently
    - an exclusive lock behaves like a write lock; only one process at a time can acquire such a lock
  - file locking mechanisms
    - mandatory: once a process acquires an exclusive lock, the operating system will prevent any other process from accessing the locked file
    - advisory: the operating system will not prevent the text editor from acquiring access to the file
  - file types

![File-System%20Interface%202dd03b9e4f2f41cb88a572775715c8a9/Screen_Shot_2020-04-09_at_10.41.52_AM.png](File-System%20Interface%202dd03b9e4f2f41cb88a572775715c8a9/Screen_Shot_2020-04-09_at_10.41.52_AM.png)
        
## 13.2 Access Methods
- sequential access
  - sequential access is a simple access method where the information in the file is processed in order, one record after the other
- direct access
  - direct access (relative access) is another method where a file is made up of fixed-length logical records that allow programs to read and write records rapidly in no particular order
  - relative block number is an index relative to the beginning of the file provided by the user to the operating system
- other access methods
  - the index is like an index in the back of a book that contains pointers to the various blocks

## 13.3 Directory Structure
- single-level directory

![File-System%20Interface%202dd03b9e4f2f41cb88a572775715c8a9/Screen_Shot_2020-04-11_at_2.01.38_PM.png](File-System%20Interface%202dd03b9e4f2f41cb88a572775715c8a9/Screen_Shot_2020-04-11_at_2.01.38_PM.png)

- single-level directory is the simplest directory structure where all files are contained in the same directory (easy to support and understand)
- two-level directory

![File-System%20Interface%202dd03b9e4f2f41cb88a572775715c8a9/Screen_Shot_2020-04-11_at_2.04.22_PM.png](File-System%20Interface%202dd03b9e4f2f41cb88a572775715c8a9/Screen_Shot_2020-04-11_at_2.04.22_PM.png)

- in the two-level directory structure, each user has his own user file directory (UFS)
- the UFDs have similar structures, but each lists only the files of a single user
- when a user job starts or a user logs in, the system's master file directory (MFD) is searched. the MFD is indexed by user name or account number
- a user name and a file name define a path name. every file in the system has a path name
- the sequence of directories searched when a file is named is called the search path. the search path can be extended to contain an unlimited list of directories to search when a command name is given
- tree-structured directories

![File-System%20Interface%202dd03b9e4f2f41cb88a572775715c8a9/Screen_Shot_2020-04-11_at_2.10.06_PM.png](File-System%20Interface%202dd03b9e4f2f41cb88a572775715c8a9/Screen_Shot_2020-04-11_at_2.10.06_PM.png)
- a tree is the most common directory structure. the tree has a root directory, and every file in the system has a unique path name
- 2 types of path names
  1. absolute path name begins at the root and follows a path down to the specified file, giving the directory names of the path
  2. relative path name defines a path from the current directory
- acyclic-graph directories
![File-System%20Interface%202dd03b9e4f2f41cb88a572775715c8a9/Screen_Shot_2020-04-11_at_2.10.19_PM.png](File-System%20Interface%202dd03b9e4f2f41cb88a572775715c8a9/Screen_Shot_2020-04-11_at_2.10.19_PM.png)      
  - an acyclic graph - a graph with no cycles - allows directories to share subdirectories and files
  - the same file or subdirectory may be in two different directories. the acyclic graph is a natural generalization of the tree-structured directory scheme
  - a link is a effectively a pointer to another file or subdirectory
- general graph directory
  - a serious problem with using an acyclic-graph structure is ensure that there are no cycles
