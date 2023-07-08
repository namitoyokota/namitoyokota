# Similarity Measures

Date: September 3, 2020
Section: Slides 3
Type: Lecture

- similarity and dissimilarity
    - similarity
        - numerical measure of how alike two data objects are
        - is higher when objects are more alike
        - often falls in the range from 0 to 1
    - dissimilarity (also called "distance")
        - numerical measure of how different two data objects are
        - lower when objects are more alike
        - minimum dissimilarity is often 0, but upper limit varies
    - proximity refers to a similarity or dissimilarity

- similarity for a single attribute
    - p and q are the attribute values for two data objects

- similarity between binary vectors
    - compute similarities
        - M01 = the number of attributes where p was 0 and q was 1
        - M10 = the number of attributes where p was 1 and q was 0
        - M00 = the number of attributes where p was 0 and q was 0
        - M11 = the number of attributes where p was 1 and q was 1
    - simple matching coefficient
        $SMC=(M11+M00)/(M01+M10+M11+M00)$
    - jaccard coefficient
        $J=(M11)/(M01+M10+M11)$
- similarity between a pair of samples
    - euclidean distance
        - math
            - n is the number of dimensions (attributes)
            - pk and qk are the kth attributes of sample p and sample q respectively
        - disadvantage
            - usually, cannot use Euclidean distance for high dimensional features because all Euclidean distances between samples are close when dimension is high
    - binary distance
        - this is covered in the "similarity between binary vectors section
    - cosine similarity
    - pearson's correlation
    - dynamic time warping
        - computing similarity between two time series with varying lengths
        - example
            - speech signals with different speeds
            - trajectory of moving object locations
        - optimal match
            defined as optimal match (minimal total distance) with
            - many to many matching
            - first index in series 1 matches first index in series 2
            - last index in series 1 matches last index in series 2
            - matching index pairs are monotonic
        - when to use
            - similar shape and pattern
            - different length (x-axis), and time delay
- common properties of a distance
- common properties of a similarity
