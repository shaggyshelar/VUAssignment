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
        "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      code: "BAhvZrRwcfu",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://randomuser.me/api/portraits/men/4.jpg"
    },
       {
      code: "BAPIPRjQce9",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://randomuser.me/api/portraits/men/5.jpg"
    }, {
      code: "BAF_KY4wcRY",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://randomuser.me/api/portraits/men/22.jpg"
    },
       {
      code: "_4jHytwcUA",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://randomuser.me/api/portraits/men/9.jpg"
    }, {
      code: "_zbaOlQcbn",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://randomuser.me/api/portraits/men/21.jpg"
    }, {
      code: "_rmvQfQce8",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://randomuser.me/api/portraits/men/15.jpg"
    }, {
      code: "_ep9kiQcVy",
      caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
      likes: 59,
      id: "1160844458347054781",
      display_src:
        "https://randomuser.me/api/portraits/men/17.jpg"
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
