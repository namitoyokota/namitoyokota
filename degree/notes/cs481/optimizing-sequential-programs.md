# Optimizing Sequential Programs

Date: January 16, 2020
Type: Lecture

- Principle of Locality
      - **principle of locality** - programs tend to use data and instructions with addresses near or equal to those they have used recently
      - types of localities
          - **temporal locality** - recently referenced items are likely to be referenced again in the near future
          - **spacial locality** - items with nearby addresses tend to be referenced close together in time
      - examples
          - data references
              - spatial locality - reference array elements in succession (stride-1 reference pattern)
              - temporal locality - reference variable sum each iteration
          - instruction references
              - spatial locality - reference instructions in sequence
              - temporal locality - cycle through loop repeatedly
- Memory Hierarchies
      - **memory hierarchy** - suggest an approach for organizing memory and storage system
      - memory hierarchy example

![Optimizing%20Sequential%20Programs%20e108e6d88bca4201aea4983b860f0827/Screen_Shot_2020-01-16_at_8.45.58_PM.png](Optimizing%20Sequential%20Programs%20e108e6d88bca4201aea4983b860f0827/Screen_Shot_2020-01-16_at_8.45.58_PM.png)

- fundamental properties of hardware and software
          - fast storage technologies cost more per byte, have less capacity, and require more power (heat)
          - the gap between cpu and main memory speed is widening
          - well-written programs tend to exhibit good locality

- Matrix Multiply
      - Matrix Multiply

`c
        for (i=0; i<n; i++) 
            for (j=0; j<n; j++) 
                for (k=0; k<n; k++)
                    C[i*n+j] += A[i*n+k] * B[k*n+j];
        `

- Matrix Multiply with Register Reuse

`c
        for (i=0; i<n; i++) 
            for (j=0; j<n; j++) {
                register double t = C[i*n+j];
                for (k=0; k<n; k++)
                    t += A[i*n+k] * B[k*n+j];
                C[i*n+j] = t;
            }
        `

- Matrix Multiple with Aggressive Register Reuse

too much to type. look on the lecture :)

- Cache
      - basics
          - **cache** - a smaller, faster storage device that acts as a staging area for a subset of the data in a larger, slower device
          - idea of a memory hierarchy
              - for each k, the faster, smaller device at level k serves as a cache for the larger, slower device at level k+1
          - why memory hierarchies works
              - because of locality, programs tend to access the data at level k more often than at level k+1
              - thus, the storage at level k+1 can be slower, and thus larger and cheaper per bit
          - big idea - the memory hierarchy creates a large pool of storage that costs as much as the cheap storage near the bottom, but that serves data to programs at the rate of the fast storage near the top
      - cache performance metrics
          - miss rate
              - fraction of memory references not found in cache
              - [misses / accesses] or [1 - hit rate]
          - hit time
              - time to deliver a line in the cache to the processor
              - typical numbers: 1-2 clock cycles for L1 and 5-20 for L2
          - miss penalty
              - additional time required because of a miss
              - typically 50-200 cycles for main memory (increasing trend)
      - writing cache friendly code
          - make the common case go fast
              - focus on the inner loops of the core functions
          - minimize the misses in the inner loops
              - temporal locality - repeated references to variables are good
              - spatial locality - stride-1 reference patterns are good
