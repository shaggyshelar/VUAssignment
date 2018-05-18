import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  photos : [
    {
      code: "BAcyDyQwcXX",
      caption: "Lunch #hamont",
      likes: 56,
      id: "1161022966406956503",
      display_src:
        "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg"
    },
    {
      code: "BAcJeJrQca9",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
    },
       {
      code: "BAcJeJrQca9",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
    }, {
      code: "BAcJeJrQca9",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
    },
       {
      code: "BAcJeJrQca9",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
    }, {
      code: "BAcJeJrQca9",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
    }, {
      code: "BAcJeJrQca9",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
    }, {
      code: "BAcJeJrQca9",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
    }
  ]
}

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      })
    default: return state
  }
}

// ACTIONS
export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = dispatch => {
  return setInterval(() => {
    // Dispatch `TICK` every 1 second
    dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
  }, 1000)
}

export const incrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.INCREMENT })
}

export const decrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.DECREMENT })
}

export const resetCount = () => dispatch => {
  return dispatch({ type: actionTypes.RESET })
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
