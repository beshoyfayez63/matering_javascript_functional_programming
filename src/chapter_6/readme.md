# Producing Functions - Higher Order Functions
- Wrapped functions: These keep their original functionality while adding some kind of new feature. (add logging, memomization for caching);
- Altered functions: These differ in some key points from their original versions. like once() to execute function once, not() and invert() which alter the function returns, and arity-related conversions, which produce a new function with a fixed number of parameters.
- Other productions: These provide new operations, turn functions into promises, allow enhanced search functions, or decouple methods from objects so that we can use them in other contexts as if they were common functions.

## Wrapping functions – keeping behavior:
we'll consider some higher-order functions that provide a wrapper around other functions to enhance them in some way but without altering their original objective.

`22.9.toPrecision(5)` where are those properties and methods coming from, given that neither strings nor numbers are objects?
JavaScript actually creates a wrapper object around your primitive value. This object inherits all the methods that are appropriate to the wrapped value. As soon as the needed evaluation has been done, JavaScript throws away the just-created wrapper. We cannot do anything about these transient wrappers, but there is a concept we will come back to regarding a wrapper that allows methods to be called on things that are not of the appropriate type.

### Logging:
#### Logging in a functional way:
- Log the received arguments
- Call the original function, catching its returned value
- Log that value
- Return it to the caller;
#### Taking exceptions into account:

#### Working in a purer way:
- We should pay attention to what we wrote in the Injecting impure functions section – the logging function should be passed as an argument to the wrapper function so that we can change it if we need to
ex: chapter_6/logger.ts

### Timing functions:
- Another possible application for wrapped functions is to record and log the timing of each function invocation in a fully transparent way.
ex: chapter_6/timing.ts

### Memoizing functions:
#### More complex memoization:
chapter_6/memoization.ts

### Altering a function's behavior:
- Revisiting the problem of having a function work, but just once
- Negating or inverting a function's result
- Changing the arity of a function

#### Doing things once, revisited:
ex: chapter_6/once.ts

#### Logically negating a function:
### Inverting the results:
**given two strings, the function should do the following:**
- Return a negative number if the first string should precede the second one
- Return 0 if the strings are the same
- Return a positive number if the first string should follow the second one
ex: chapter_6/negate.ts

### Arity changing:
chapter_6/arity_chaining.ts

### Changing functions in other ways:
#### Turning operations into functions:
- Turning operations (such as adding with the + operator) into functions.
- Turning functions into promises
- Accessing objects to get the value of a property
- Turning methods into functions
- A better way of finding optimum values

##### Turning operations into functions:
**Implementing operations:**
**A handier implementation:**