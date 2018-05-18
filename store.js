import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import AppConfig from './lib/AppConfig';

const exampleInitialState = {
  loadingComments: false,
  photoComments: [],
  photos : [
    {
      code: "BAcyDyQwcXX",
      caption: "Lunch #hamont",
      likes: 56,
      id: "1161022966406956503",
      display_src:
        "https://picsum.photos/260/260/?image=0"
    },
    {
      code: "BAhvZrRwcfu",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://picsum.photos/260/260/?image=1"
    },
       {
      code: "BAPIPRjQce9",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://picsum.photos/260/260/?image=2"
    }, {
      code: "BAF_KY4wcRY",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://picsum.photos/260/260/?image=3"
    },
       {
      code: "_4jHytwcUA",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://picsum.photos/260/260/?image=4"
    }, {
      code: "_zbaOlQcbn",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://picsum.photos/260/260/?image=5"
    }, {
      code: "_rmvQfQce8",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://picsum.photos/260/260/?image=6"
    }, {
      code: "_ep9kiQcVy",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://picsum.photos/260/260/?image=7"
    }
  ]
}

export const actionTypes = {
  LOAD_COMMENTS: 'LOAD_COMMENTS',
  LOAD_COMMENTS_SUCCESS: 'LOAD_COMMENTS_SUCCESS'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_COMMENTS:
      return Object.assign({}, state, {
        loadingComments: true,
      })
    case actionTypes.LOAD_COMMENTS_SUCCESS:
      return Object.assign({}, state, {
        photoComments: action.payload,
        loadingComments: false,
      })
    default: return state
  }
}

// ACTIONS
export const getPhotoComments = (data) => {
  data.dispatch({ type: actionTypes.LOAD_COMMENTS, id: data.id });
  axios.get(`${AppConfig.appUrl}/api/comments/`+data.id, {
    headers: {"Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH',}
  })
  .then(function (response) {
    data.dispatch({ type: actionTypes.LOAD_COMMENTS_SUCCESS, payload: response.data })
  })
  .catch(function (error) {
    console.log(error);
  });
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
