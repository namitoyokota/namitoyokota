# Classification Part 1

Date: September 10, 2020
Section: Slides 4
Type: Lecture

## supervised learning
- given a collection of records (training set), each record contains a set of attributes, one of the attributes is the class
- find a model for class attribute as a function of the values of other attributes
- goal: previously unseen records should be assigned a class as accurately as possible
- a test set is used to determine the accuracy of the model

## decision tree learning
- specifying test condition
- multi-way split: use as many partitions as distinct values
- binary split: divides values into two subsets (need to find optimal partitioning)

- determine the best split
  - greedy approach: nodes with purer class distribution are preferred
- measure class impurity
  - entropy
![Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-12_at_5.46.39_PM.png](Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-12_at_5.46.39_PM.png)
- information gain
  - decrease of entropy after node split
![Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-12_at_5.47.09_PM.png](Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-12_at_5.47.09_PM.png)

- pros and cons of decision tree
  - pros
    - fast in training and prediction
    - easy to interpret
    - reasonably good accuracy
  - cons
    - greedy algorithm, not optimal
    - unstable when samples are changed
    
- model evaluation
  - metrics for performance evaluation
    - focus on the predictive capability of a model
    - confusion matrix
![Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.21.32_PM.png](Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.21.32_PM.png)

- measures
  - accuracy
    - accuracy is the most widely-used metrix:
![Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.22.17_PM.png](Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.22.17_PM.png)
  - problem with accuracy
![Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.22.52_PM.png](Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.22.52_PM.png)
  - precision
![Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.23.13_PM.png](Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.23.13_PM.png)
  - recall
![Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.23.27_PM.png](Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.23.27_PM.png)
  - f-measure
![Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.23.36_PM.png](Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.23.36_PM.png)
  - rates
![Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.24.06_PM.png](Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.24.06_PM.png)

- evaluation step
  - holdout
    - 2/3 for trainig
    - 1/3 for testing
  - random subsampling
    - repeated holdout
  - cross validation
    - partition data into k disjoint subsets
    - k-fold: train on k-1 partitions, test on the remaining one
    - leave-one-out: k=n
  - stratified sampling
  - oversampling vs undersampling
  - bootstrap
  - sampling with replacement
  - learning curve
    - learning curve shows how accuracy changes with varying sample size
    - requires a sampling schedule for creating learning curve

![Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.27.28_PM.png](Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.27.28_PM.png)

- roc (receiver operating characteristic)
  - a graphical approach for displaying trade-off between detection rate and false alarm rate
  - developed in 1950s for signal detection theory to analyze noisy signals

![Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.28.29_PM.png](Classification%20Part%201%20cb15a01f6b084791ad8b43207ec208af/Screen_Shot_2020-09-20_at_3.28.29_PM.png)

- model overfitting
  - what is overfitting
    - mode is over-complex compared with the small size of training data
    - model has very small training errors but generalize poorly to unseen test data
  - multiple comparison procedure
    - consider the task of predicting whether stock market will rise or fall in the next 10 trading days
    - when you make 10 random guesses in a row: $P(numCorrect≥8)=0.0547$

- new approach:
  - get 50 analysts
  - each analyst makes 10 random guesses
  - choose the analyst that makes the most number of correct predictions
  - probability that at least one analyst makes at least 8 correct predictions is now 0.9399

- notes on overfitting
  - overfitting results in decision trees that are more complex than necessary
  - training error does not provide a good estimate of how well the tree will perform on previously unseen reords
  - need ways for estimating generalization errors

- how to address overfitting
  - pre-pruning (early stopping rule)
  - stop the algorithm before it becomes a fully-grown tree
  - post-pruning
  - grown decision tree to its entirety
  - trim the nodes of the decision tree in a bottom-up fashion
  - if generalization error improves after trimming, replace sub-tree by a leaf node
