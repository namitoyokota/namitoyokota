# Understanding Data, Preprocessing and Exploration

Date: August 25, 2020
Section: Slides 2
Type: Lecture

What Is Data
    - factual information used as a basis for reasoning, discussion, or calculation
    - source of data
        - natural phenomenon - temperature, precipitation
        - human activity - web-clicks, GPS trajectory, email
        - simulation - climate model, nuclear weapon

Definitions
    - object also called sample, record, or instance
    - attribute - property of object, also called covariate, field, feature
    - dimension - the number of attributes in each object
    - feature vector - multi-dimensional point in feature space
    - sparsity - on attributes or objects
    - noise - on attributes or objects

Types of Data by Structures
    - table of records - no dependency structure
    - graphs - road network, social network, the web
    - spatial maps - earth imagery, disease map
    - time series or sequences - DNA, voice
    - semi-structured data - webpage, tweets
- attribute types

Types of Attributes
    - qualitative attribute - nominal and ordinal attributes
    - quantitative attribute - interval and ratio attributes
    - discrete attribute - finite or countable infinite set of values
    - continuous attribute - real values
    - asymmetric attribute - only non-zero values are important

Data Collection Issues
Missing Meta Data

- Attribute name, type, and interpretation
- How missing values are represented

Missing Important Attributes

- Missing class labels
- Missing attribute values
- Very common, data collection mistake
- Estimate values
- Remove those records
- Ignore missing values

Noise

- Noise refers to modification of original values
- Solution: filter out noise, design robust algorithms

Errors, Inconsistency, Redundant or Duplicate data

- Happens when merging data from heterogeneous sources
- Solution: data cleaning

Application Related Issues
Sampling

- The entire data is too expensive or time consuming to collect or process so we use sampling
- The key principle is that the samples be representative of the population

Common Sampling Method

- Simple random sampling
- Stratified sampling
- Clustered sampling
- Systematic sampling

Common Sampling Problems

- Insufficient number of sample to reveal patterns
- Samples are biased towards some sub-group
- Correlation exist between samples

Outliers

- Outliers are objects whose characteristics are considerably different than most others
- Some data mining algorithms are sensitive to outliers
- Solutions
  - Detect and remove outliers
  - Robust mining algorithms

Feature Transformation
    - simple functions: $x^k$, $log(x)$, $e^x$, $|x|$
    - standardization and normalization
        - goal: unify values ranges for features
        - $(x-μ)/σ$, where μ is mean and σ is standard deviation
    - avoid impacts of outliers
        - use median instead of mean
        - use absolute standard deviation
        - question: what transformation to use
    - discretization continuous attributes
        - raw data
        - equal interval
        - equal frequency
        - k-means clustering

- feature engineering
    - why preprocessing features
        - good features + simple model = good result
        - features in raw data often not good
    - issues
        - too many features (dimensionality reduction)
        - features not effective in task (handcraft feature, feature engineering)
        - too hard to handcraft features (feature learning, deep learning)

- dimensionality
    - curse of dimensionality
        - when feature dimension is very high
            - hard to visualize data
            - euclidean distance less meaningful
            - data becomes increasingly sparse in feature space
    - dimensionality reduction
        - purpose
            - avoid curse of dimensionality
            - reduce amount of time and memory requred
            - eliminate irrelevant features or reduce noise
            - easier for visualization
        - common techniques
            - principle component analysis (PCA)
            - manifold learning
    - dimensionality reduction: PCA
        - goal is to find a projection that captures the largest amount of variation in data
        - eigenvectors of the covariance matrix as basis

- feature engineering pt2
    - common approaches
        - feature extraction: creating new features from raw data
        - feature transformation: mapping features to new space
    - feature extraction
        - consider the application of computer vision
        - raw pixel color are often not informative
        - features like edge, corner, orientation are more useful
        - scale-invariant feature transform (SIFT)

- deep learning
    - automatic feature extraction (end-to-end)
    - big training data + faster computer
    - advantages
        - automatically extract advanced features in layers
        - bridge semantic gaps
        - surprisingly good performance
    - disadvantages
        - black box (interpretability)
        - parameter tuning
    - real world impacts
        - automatic driving
        - face recognition
