# Mass-Storage Structure

Date: April 9, 2020
Section: Chapter 10
Type: Textbook

## 10.1 Overview of Mass-Storage Structure
- magnetic disks
  - magnetic disks provide the bulk of secondary storage for modern computer systems
  - each disk platter has a flat circular shape. the two surfaces of a platter are covered with a magnetic material. we store information by recording it magnetically on the platters
  - moving-head disk mechanism

![Mass-Storage%20Structure%20adf382426f2540cc8df11eb9aa2df24e/Screen_Shot_2020-04-09_at_9.57.49_AM.png](Mass-Storage%20Structure%20adf382426f2540cc8df11eb9aa2df24e/Screen_Shot_2020-04-09_at_9.57.49_AM.png)

- a read-write head "flies" just above each surface of every platter
  - the heads are attached to a disk arm that moves all the heads as a unit
  - the surface of a platter is logically divided into circular tracks, which are subdivided into sectors
  - the set of tracks that are at one arm position makes up a cylinder
- the transfer rate is the rate at which data flow between the drive and the computer
- the positioning time, or random-access time, consists of two parts:
  - seek time: the time necessary to move the disk arm to the desired cylinder
  - rotational latency: the time necessary for the desired sector to rate to the disk head
- head crash is an accident where the head damages the magnetic surface. this accident normally cannot be repaired and the entire disk must be replaced
- a disk can be removable, allowing different disks to be mounted as needed
- flash drives are a type of solid-state drive that are another form of removable disks
- a disk drive is attached to a computer by a set of wires called an io bus
- several kinds of buses are available
  - advanced technology attachment (ATA)
  - serial ATA (SATA)
  - eSATA
  - universal serial bus (USB)
  - fibre channel (FC)
- the data transfers on a bus are carried out by special electronic processor called controllers
- the host controller is the controller at the computer end of the bus
- a disk controller is built into each disk drive
- solid-state disks
  - solid-state disk (SSD) is nonvolatile memory that is used like a hard drive
- magnetic tapes
  - magnetic tape was used as an early secondary-storage medium
  - although it is relatively permanent and can hold large quantities of data, its access time is slow compared with that of main memory and magnetic disk

## 10.4 Disk Scheduling
- intro
  - the seek time is the time for the disk arm to move the heads to the cylinder containing the desired sector
  - the rotational latency is the additional time for the disk to rate the desired sector to the disk head
  - the disk bandwidth is the total number of bytes transferred, divided by the total time between the first request for service and the completion of the last transfer
- fcfs scheduling
  - the simplest form of disk scheduling is the first-come, first-served (FCFS) algorithm
  - the algorithm is intrinsically fair, but it generally does not provide the fastest service
- sstf scheduling
  - the shortest-seek-time-first (SSTF) algorithm selects the request with the least seek time from the current head position
  - SSTF scheduling is essentially a form of shortest-job-first (SJF) scheduling
- scan scheduling
  - in the SCAN algorithm, the disk arm starts at one end of the disk and moves toward the other end, servicing requests as it reaches each cylinder, until it gets to the other end of the disk
  - the SCAN algorithm is sometimes called the elevator algorithm, since the disk arms behaves just like an elevator in a building, first servicing all the requests going up and then reversing to service requests the other way
- c-scan scheduling
  - circular SCAN (C-SCAN) scheduling is a variant of SCAN designed to provide a more uniform wait time
  - like SCAN, C-SCAN moves the head from one end of the disk to the other, servicing requests along the way. when the head reaches the other end, however, it immediately returns to the beginning of the disk without servicing any requests on the return trip
- look scheduling
  - versions of SCAN and C-SCAN that follow this pattern are called LOOK and C-LOOK scheduling, because they look for a request before continuing to move in a given direction
- selection of a disk-scheduling algorithm
  - SSTF is common and has a natural appeal because it increases performance over FCFS
  - SCAN and C-SCAN perform better for systems that place a heavy load on the disk, because they are less likely to cause a starvation problem

## 10.5 Storage Device Management
- drive formatting, partitions, and volumes
  - low-level formatting (physical formatting) is a process which fills the device with a special data structure for each storage location
  - mounting a file system is making the file system available for use by system and its users
- 3 steps of recording data structures
  1. partition the device into one or more groups of blocks or pages
  2. volume creation and management
  3. logical formatting, creation of a file system
- to increase efficiency, most file systems group blocks together into larger chunks, frequently called clusters
- some operating systems give special program the ability to use a partition as a large sequential array of logical blocks. this array is sometimes called the raw disk
- boot block
  - a device that has a boot partition is called a boot disk or system disk
  - windows allows a drive to be divided into partitions, and one partition - identified as the boot partition - contains the operating system and device drivers
  - it palces its boot code in the first logical block on the hard disk or first page of the NVM device, which it terms the master boot record, or MBR
  - boot sector is the first sector/page of that partition
- bad blocks
  - sector parsing is a scheme where the controller replaces each bad sector logically with one of the spare sectors
  - sector slipping is an alternative to sector parsing to replace a bad block
