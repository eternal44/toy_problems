# 8 ball problem
Of 8 balls one of them is a different weight.  The only way to find the different ball is to use a scale.  Find the odd ball out- no pun intended :).

# Solution summary
Use a decision tree to deduce what balls need to be removed.  

Max number of weighings: **3**
#####Notes:
- Finding normal balls for reference in the 2 ball series is trivial so I won't reference finding them.
- Numbers in an array represent balls on one side of a scale like "[1, 2, 3]".  


## 6 ball series 
Start by weighing 6 balls - three on each side

### 6.1
```
  [1, 2, 3] > [4, 5, 6]
    run 4 ball series with [1, 2, 3, 4]
```

### 6.2
```
  [1, 2, 3] < [4, 5, 6]
    run 4 ball series with [1, 2, 3, 4]
```

### 6.3
```
  [1, 2, 3] = [4, 5, 6]
    run 2 ball series with [7, 8]
```


## 4 ball series
### 4.1
```
  [1, 2] > [3,4]

  swap ball 2 & 3

  [1, 3] > [2, 4]
    run 2 series with [1, 4]
    if 1.3 -> 4 is light
    if 1.1 -> 1 is heavy
    * 1 cannot be light
    * 4 cannot be heavy
```

### 4.2
```
  [1, 2] = [3,4]
  run 2 series with [5, 6]
```

### 4.3
```
  [1, 2] < [3,4]

  swap ball 2 & 3
    if 1.3 -> 2 is heavy
    if 1.2 -> 1 is light
    * 1 cannot be heavy
    * 4 cannot be light
```


## 2 ball series
Listing 2 ball outcomes here for easyier reference.  'n' denotes a normal ball.

### 1.1
```
  1 > n
```

### 1.2
```
  1 < n
```

### 1.3
```
  1 = n
```

