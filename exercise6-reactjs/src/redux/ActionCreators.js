import * as ActionTypes from './ActionTypes';
import axios from 'axios';

export const fetch = () => (dispatch) => {
    axios.get('http://localhost:4000/listFood')
        .then((response) => {
            dispatch(fetchData(response.data));
        })
        .catch(function (error) {
            console.log(error);
        })
}
export const fetchById = (id) => (dispatch) => {
    axios.get('http://localhost:4000/listFood')
        .then((response) => {
            response.data.forEach(item => {
                if (item.id === id) {
                    dispatch(fetchRecipeById(item));
                }
            });
        })
        .catch(function (error) {
            console.log(error);
        })
}

export const fetchData = (data) => ({
    type: ActionTypes.FETCH_DATA,
    payload: data
});

export const fetchRecipeById = (recipe) => ({
    type: ActionTypes.FETCH_BY_ID,
    payload: recipe
})