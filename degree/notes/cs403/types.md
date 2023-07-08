# Types

Date: February 15, 2020
Lecture: 7
Type: Lecture

- Terms
      - **data type** - defines a collection of data objects and a set of predefined operations on those objects
      - **descriptor** - the collection of the attributes of a variable
      - **object** - represents an instance of a user-defined type
      - **primitive data types** - those not defined in terms of other data types
      - **indexing** - mapping from indices to elements
      - **slices -** some substructure of an array
      - **tombstone -** extra heap cell that is a pointer to the heap-dynamic variable
      - **locks-and-keys** - pointer values are represented as (key, address) pairs
- **Primitive Data Types**
      - **integer** - almost always an exact reflection of the hardware so the mapping is trivial
      - **floating point** - model real numbers, but only as approximations
      - **complex** - each value consists of two floats, the real part and the imaginary part
      - **decimal** - store a fixed number of decimal digits, in coded form
      - **boolean** - 'true' or 'false'
      - **character** - stored as numeric codings
- **Non-Primitive Data Types**
      - **string** - values are sequences of characters
      - **enumeration** - all possible values, which are named constants, are provided in the definition
      - **array** - homogeneous aggregate of data elements in which an individual element is identified by its position int he aggregate
      - **rectangular array** - multi-dimensioned array in which all of the rows have the same number of elements and all columns have the same number of elements
      - **associative array** - an unordered collection of data elements that are indexed by an equal number of values called keys
      - **record** - possible heterogeneous aggregate of data elements in which the individual elements are identified by names
      - **tuple** - data type that is similar to a record, except that the elements are not named
      - **union** - type whose variables are allowed to store different type values at different times during execution
      - **pointer** - has a range of values that consists of memory and addresses and a special value, nil
- Descriptors

![Types%202ea19e9679e7429db75ca6ab9b4e5210/Screen_Shot_2020-02-15_at_5.28.01_PM.png](Types%202ea19e9679e7429db75ca6ab9b4e5210/Screen_Shot_2020-02-15_at_5.28.01_PM.png)

![Types%202ea19e9679e7429db75ca6ab9b4e5210/Screen_Shot_2020-02-15_at_5.33.03_PM.png](Types%202ea19e9679e7429db75ca6ab9b4e5210/Screen_Shot_2020-02-15_at_5.33.03_PM.png)

- Subscript Binding
      - fixed stack-dynamic - subscript ranges are statically bound, but the allocation is done at declaration time
      - fixed heap-dynamic - storage binding is dynamic but fixed after allocation
      - heap-dynamic - binding of subscript ranges and storage allocation is dynamic and can change any number of time
- Heap Management
      - two approaches to reclaim garbage
          - reference counters (eager approach) - reclamation is gradual
          - mark-sweet (lazy approach) - reclamation occurs when the list of variable space becomes empty
