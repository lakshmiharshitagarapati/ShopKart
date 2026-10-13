# React Hooks
- React provides certain hooks to help maintain state and lifeccle methods of functional components 
---
1.** useState()** - Manages component state

-syntax
```jsx
const [state,setState]=useState(initialValue);
```
|Term|Relevance|
|---|---|
|`state`|reference to current value of state
|`setstate`|function to set value of state
|`initial value`|initialization value of the state ;this decides the datatype as well
|`useState(value)`|return an array of a variable assigned with the value given as parameter and a function which updates the state value. |

_*Example**_

```js
import {useState} from "react";

function Counter(){
    const [count,setCount]=useState(0);
    // 0 will be set as the initial value of 'count'

    function increment(){
       setCount(count + 1);
    }
    return (
        <div>
            <h2>Count : {count}</h2>
            <button>Increment</button>
        </div>
    );
}
export default Counter;
    
```

Applications :
- Form inputs
- Shopping cart quantities of individual items
- Authentication UI state updation 
- Filtering and sorting in search results 
- Modal visibility
- Pagination
- Tabs
- Selection of cards,gallery images for forwarding, etc 

----

2. **useEffect()** - handles functions with side effects preventng them from being called unintentionally.
- Synchronise a component with external systems with controlled side effects.

syntax:
```js
useEffect(<function_with_side_effect>,[dependency_array]);
```

```jsx
useEffect(
    () => {
        // Effect logic
        return () => {
            // returning the cleanup logic using arrow method
        };
    },

    [dependencies]
);
```

- Effect logic  is the logic which has side effects.
- cleanup will be executed when the effect is required to be cleaned up
- **Dependency Array** - Determines  when the effect should run again.

    `Dependency Array can have different configurations`

|Dependency Array|Result|
|---|---|
|No dependency array| Effect runs after every committed render |
| Empty dependency array| Runs after initial mount only (one -time) |
| With dependencies| Runs effect after initial mount and whenever the dependencies  chnages.
