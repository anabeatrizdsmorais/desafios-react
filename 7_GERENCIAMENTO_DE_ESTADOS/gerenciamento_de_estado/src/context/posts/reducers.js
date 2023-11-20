import { combineReducers } from "redux";

export const postReducer = (state = [], action ) => {
    switch(action.type){
        case "GET_POSTS":
            return action.payload;
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    posts: postReducer
});