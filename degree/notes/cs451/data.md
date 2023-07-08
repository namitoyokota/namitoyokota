Data Science - Data

2.1 - Types of Data
Introduction

- A data set can often be viewed as a collection of data objects
- Other names for data object: record, point, vector, pattern, event, case, sample, instance, observation, or entity
- Data objects are described by a number of attributes that capture the characteristics of an object
- Other names for attribute: variable, characteristic, field, feature, or dimension

Attributes and Measurement

- An attribute is a property or characteristic of an object that can vary, either from one object to another or from one time to another
- A measurement scale is a rule (function) that associates a numerical or symbolic value with an attribute of an object
- The process of measurement is the application of a measurement scale to associate a value with a particular attribute of a specific object

Operations Used to Describe Attributes

1. Distinctness = and !=
2. Order <, <=, >, and >=
3. Addition + and -
4. Multiplication X and /

Different Types of Attributes

- Nominal and ordinal attributes are collectively referred to as categorical or qualitative attributes. these should be treated more like symbols even if they are numbers
- Interval and ratio attributes are collectively referred to as quantitative or numeric attributes. these attributes can be integer-valued or continuous

Describing Attributes

- A discrete attribute has a finite or countably infinite set of values
- A continuous attribute is one whose values are real numbers

Characterstics of Data Sets
Dimensionality

- The dimensionality of a data set is the number of attributes that the objects in the data set possess
- The difficulties associated with the analysis of high-dimensional data are sometimes referred to as the curse of dimensionality
  Distribution
- The distribution of a data set is the frequency of occurrence of various values or sets of values for the attributes comprising data objects

Record Data
Transactino or Market Basket Data

- Transaction data is a special type of record data, where each record (transaction) involves a set of items
- This type of data is called market basket data because the items in each record are the products in a person's "market basket"
  The Data Matrix
- If all the data objects in a collection of data have the same fixed set of numeric attributes, then the data objects can be though of as points in a multidimensional space
- This matrix is called a data matrix or a pattern matrix
  The Sparse Data Matrix
- A sparse data matrix is a special case of a data matrix where the attributes are of the same type and are symmetric
- This representation of a collection of documents is often called a document-term matrix

Ordered Data
Sequential Transaction Data

- Sequential transaction data can be thought of as an extension of transaction data, where each transaction has a time associated with it
  Time Series Data
- Time series data is a special type of ordered data where each record is a time series
- Sequence Data
- Sequence data consists of a data set that is a sequence of individual entities
