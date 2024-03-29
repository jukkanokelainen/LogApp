import {GET_LOGS, 
    SET_LOADING, 
    LOGS_ERROR, 
    ADD_LOG, 
    DELETE_LOG, 
    SET_CURRENT,
    UPDATE_LOG,
    SEARCH_LOGS} from './types'

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

export const getLogs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    }
    catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

//Add a log
export const addLog = (log) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/logs', {
            // Adding method type
            method: "POST",
            // Adding body or contents to send
            body: JSON.stringify(log),
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });
    }
    catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

//delete a log
export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();

        await fetch(`/logs/${id}`, {
            // Adding method type
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    }
    catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}
//update a log
export const updateLog = (log) => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/logs/${log.id}`, {
            // Adding method type
            method: "PUT",
            // Adding body or contents to send
            body: JSON.stringify(log),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        
        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    }
    catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

//filter/search logs
export const searchLogs = (text) => async dispatch => {
    try {
        setLoading();
        
        const res = await fetch(`/logs?q=${text}`, {
            // Adding method type
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
    }
    catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

//set selected log current log
export const setCurrentLog = (log) => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

//set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}