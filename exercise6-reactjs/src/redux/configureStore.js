import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {ListRecipe} from './listRecipeReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            ListRecipe,
        }),
        applyMiddleware(thunk)
    );
    return store;
}