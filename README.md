# FX-Calculator

FX Calculator is an interactive web application that allows users to enter an amount in one currency and convert it into a different currency. It also display the exchange rate for a chosen currency pair for the last 30 days in a graph. The data is provided by
https://www.alphavantage.co/.

![Alt Text](https://media.giphy.com/media/gQdejV5BBChHi/giphy.gif)


### Quick Start
Clone the project https://github.com/manonja/FX-Calculator

- `cd FX-Calculator/fx-calculator`
-  `yarn`
- `yarn start`

The app will run on http://localhost:3000

### Deliverables
- It should be built using TypeScript and React. 
- It should minimize the number of API requests to make the app as efficient as possible.
- It should have a good looking, easy to understand interface. 
- It should be built with flexibility in mind, for example being able to switch data provider easily.

### Main Design Decisions
- Components architecture: I chose to use the atomic design to organize React components around a methodic and consistent system. providing a systematic approach aligned with code reusability. (The atomic design consists of atoms, molecules, organism and templates/pages.)

- State management: I chose to use React Hooks with `useReducer`. This approach allowed me to manage the state from a single source of truth without the complexity of Redux. Here we just set an `initialState` in the `store` with a reducer function that will update the state depending on the action we dispatch.

### Improvements
- Use `async/await` and implement a error handling for API requests.
- Use the Ramda library and the `R.once()` function to limit the number of API call to one no matter how many times the returned function is invoked (see https://ramdajs.com/docs/#once).
- Implement ISO Currency Code ISO 4217:2015 (see https://www.iso.org/standard/64758.html).
- Use enum with constant values for currencies: 
  `enum Currencies { USD = “USD”, EUR = “EUR”, GBP = “GBP” // add all other iso currencies }`
- Improve the styling with a `CSS-in-JS` solution.
- Write tests (End-to-End test and unit tests).

### Time spent
I spent a total of about 8 hours. 

### What I love about this app
I really enjoyed building something new using TypeScript and building a graph! It was a bit different from ES6 but I could find some similarities and logic from Scala, which I have some experience with. I hope my next job will give me the opportunity to work in TypeScript.

What I like about the implementation is the architecture of the app:
- `components` using the atomic design, 
- `api` for API call which I designed in a reusable way,
- `utils` for helper function,
- `store` for state management. 
I think it is easy to grow an app from this architecture which I appreciate.

Overall, I enjoyed the opportunity to build something new. I've never used `react chart.js 2` before this project, and it makes me want to experiment more with that. 

### Author
Manon Jacquin (https://github.com/manonja)
