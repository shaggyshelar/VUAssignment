import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import AppConfig from './lib/AppConfig';

const exampleInitialState = {
  loadingComments: false,
  photoComments: [{"text":"Wes. WE should have lunch.","user":"jdaveknox"},{"text":"#adults","user":"jdaveknox"},{"text":"@jdaveknox yes!","user":"wesbos"},{"text":"😍 love Hamilton!","user":"willowtreemegs"}],
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
    data.dispatch({ type: actionTypes.LOAD_COMMENTS_SUCCESS, id: data.id })
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
