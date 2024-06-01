# Programming Declaratively - A Better Style:
Here will use some of HOF like reduce - flat - flatMap - forEach - filter - find

Using these functions lets you work more declaratively, and you'll see that your focus will shift to what you need to do and not so much how it's going to be done; the dirty details are hidden inside our functions. Instead of writing a series of possibly nested for loops, we'll focus on using functions as building blocks to specify our desired result

**fluent fashion** which the output of a function becomes the input of the next one, a style we will look at later.

## Transformations:
The first set of operations that we are going to consider work on an array and process it in the base of a function to produce some results.

### Reducing an array to a value:
ex: chapter_5/reduce.ts

### Applying an operation – map:
#### Working with ranges:
ex: chapter_5/map.ts

### Flattening an array:
#### Mapping and flattening – flatMap()
### Emulating flat() and flatMap()
ex: chapter_5/flat.ts

### More general looping: forEach
ex: chapter_5/forEach.ts

### Logical higher-order functions:
Up to now, we have been using higher-order functions to produce new results, but there
are also some other functions that produce logical results by applying a predicate to all the
elements of an array.

#### Filtering an array:
#### Emulating filter() with reduce():
ex: chapter_5/filter.ts

#### Searching an array:
- find()
- findIndex()
- includes(value)
- indexOf(value)
#### A special search case:
#### Emulating find() and findIndex() with reduce()
#### Higher-level predicates – some, every
#### Checking negatives – none
ex: chapter_5/search.ts

### Working with async functions:
#### ForEach:
#### Mapping async calls:
#### Filtering with async calls:

