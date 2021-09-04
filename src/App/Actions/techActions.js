import {GET_TECHS, 
    SET_LOADING, 
    TECHS_ERROR, 
    ADD_TECH, 
    DELETE_TECH} from './types'

// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();

//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         });
//     }
// }

export const getTechs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    }
    catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.data
        })
    }
}

//Add a technician
export const addTech = (tech) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/techs', {
            // Adding method type
            method: "POST",
            // Adding body or contents to send
            body: JSON.stringify(tech),
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        });
    }
    catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.data
        })
    }
}

//delete a technician
export const deleteTech = (id) => async dispatch => {
    try {
        setLoading();

        await fetch(`/techs/${id}`, {
            // Adding method type
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    }
    catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.data
        })
    }
}

//set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}