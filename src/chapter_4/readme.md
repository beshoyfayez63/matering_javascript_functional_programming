# Chapter 3 review:
- Arrow functions
- Injection
- Callbacks
- Polyfilling
- Stubbing

# In Chapter 4:
- Consider the notion of purity, and why we should care about pure functions—and impure functions as well!
- Examine the concept of referential transparency.
- Recognize the problems implied by side effects.
- Show some advantages of pure functions.
- Describe the main reasons behind impure functions.
- Find ways to minimize the number of impure functions.
- Focus on ways of testing both pure and impure functions.

**I/O refers to the communication between an information system, like a computer or server, and another system or user.**

### Pure functions:
- Given the same arguments, the function always calculates and returns the same result.
- When calculating its result, the function doesn't cause any observable side effects.

Idempotent function:
A PUT call would cause a database record to be updated (a side effect), but if you repeat the call, the element will not be further modified, so the global state of the database won't change any further

### Referential transparency:
In mathematics, referential transparency is the property that lets you replace an expression with its value without changing the results of whatever you were doing.

`const x = 1 + 2 * 3;` optimizing compiler will do that
`const x = 1 + 6` then `const x = 7`

- All arithmetical expressions (involving both mathematical operators and functions) are referentially transparent: 22*9 can always be replaced by 198.

- Expressions involving I/O are not transparent, given that their results cannot be known until they are executed, date- and time-related functions or random numbers are also not transparent.

#### Referential opacity:
A referentially opaque function cannot guarantee that it will always produce the same result, even when called with the same arguments.

#### You could classify functions as the following:
- Pure functions: These return a value that depends only on its arguments and have no side effects whatsoever.
- Side effects: These don't return anything (actually, in JavaScript, these functions return an undefined value, but that's not relevant here), but do produce some kind of side effects
- Functions with side effects: This means that they return a value that may not only depend on the function arguments, but also involve side effects.

### Side effects:
We can define these as a change in state or an interaction with outside elements (the user, a web service, another computer, whatever) that occurs during the execution of some calculations or a process.

**In this section**
- Common side effects in JavaScript programming
- The problems that global and inner states cause
- The possibility of functions mutating their arguments
- Some functions that are always troublesome

**Usual side effects**
- Changing global variables.
- Mutating objects received as arguments.
- Performing any kind of I/O, such as showing an alert message or logging some text.
- Working with, and changing, the filesystem.
- Updating a database.
- Calling a web service.
- Querying or modifying the DOM.
- Triggering any external process
- Just calling another function that happens to produce a side effect of its own.

#### Global State:

**example at** chapter_4/global_state.ts

the most common reason for side effects is the usage of nonlocal variables that share a global state with other parts of the program.

**There is an exception to this rule** at chapter_4/global_state.ts

#### Inner State:
The notion is also extended to internal variables, in which a local state is stored and then used for future calls.
In this case, the external state is unchanged, but there are side effects that imply future differences as to the returned values from the function

- In OOP, we developers are used to storing information (attributes) and using them for future calculations; however, this usage is considered impure

#### Argument mutation
In JavaScript, arguments are passed by value, except in the case of arrays and objects, which are passed by reference.
This implies that any modification to the parameters of the function will affect an actual modification of the original object or array.

**Ex:** chapter_4/argument_mutation.ts

#### Troublesome functions:
Some functions also cause problems. For instance, Math.random() is impure: it doesn't always return the same value.

**Ex:** chapter_4/troublesome_function.ts

Impurity can be inherited by calling functions. If a function uses an impure function, it immediately becomes impure itself.

The concern about impurity also extends to functions that access the current time or date, because their results will depend on an outside condition

### Advantages of pure functions:
- they don't have any side effects.

#### Order of execution
You know that their execution—in whichever order—won't ever have any sort of impact on the system. This idea can be extended further: you could evaluate pure functions in parallel, resting assured that results wouldn't vary from what you would get in a singlethreaded execution.

**parallelization isn't really an FP advantage in JavaScript terms.**

#### Memoization:
Since the output of a pure function for a given input is always the same, you can cache the function results and avoid a possibly costly recalculation. This process, which implies evaluating an expression only the first time and caching the result for later calls, is called memoization.

#### Self-documentation:
Pure functions have another advantage. Since everything the function needs to work with is given to it through its parameters, with no kind of hidden dependency whatsoever, when you read its source code, you have all you need to understand the function's objective.

#### Testing:
Pure functions have a single responsibility: producing their output in terms of their input. So when you write tests for pure functions, your work is greatly simplified because there is no context to consider and no state to simulate.

### Impure functions:
If you decided to completely forego all kinds of side effects, then your programs:
- Would only be able to work with hardcoded inputs.
- You wouldn't be able to make any web services calls or update the DOM;
- And your Node code would be really useless for server-side work, as it wouldn't be able to perform any I/O.

#### Avoiding impure functions:

- Avoiding the usage of state
- Using a common pattern, injection, to have impurity in a controlled fashion

##### Avoiding the usage of state:
With regard to the usage of the global state—both getting and setting it.

- Provide whatever is needed of the global state to the function as arguments.
- If the function needs to update the state, it shouldn't do it directly, but rather produce a new version of the state and return it.
- It should be the responsibility of the caller to take the returned state, if any, and update the global state.

ex: chapter_4/avoid_state.ts

#### Injecting impure functions:
If a function becomes impure because it needs to call another function that is itself impure, a way around this problem is to inject the required function in the call.

ex: chapter_4/inject_impure_function

#### Is your function pure:
it actually depends on whatever parameters you pass to it; in JavaScript, you can make a pure function behave in an impure way!

ex: chapter_4/is_pure.ts

### Testing - pure versus impure:
try to structure your code so that you can isolate the impure functions and let the rest of your code be the best it can possibly be. With this in mind, you'll have to be able to write unit tests for all kinds of functions, pure or impure.

#### Testing pure functions:
- Call the function with a given set of arguments
- Verify that the results match what you expected.

