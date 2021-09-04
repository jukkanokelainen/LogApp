import {createSlice, createReducer} from 'reduxjs/toolkit'

const initialState = {
    logs: [
      {
        "id": "1",
        "message": "hard drive broken",
        "attention": "false",
        "tech": "Matt",
        "date": "03-09-2021 21:00:00.000"
      },
      {
        "id": "2",
        "message": "screen broken",
        "attention": "true",
        "tech": "Sam",
        "date": "04-09-2021 21:00:00.000"
      }
    ]
};


export const logsSlice = createSlice({
    name: 'logs',
    initialState: initialState,
    reducers: {
        addLog(state, action) {
            state.logs = state.logs + action.payload
        },
        removeLog(state,action) {
            state.logs = state.logs.filter(log.id !== action.payload)
        }
    },
  })

  export const { addLog, removeLog } = logsSlice.actions
  export default logsSlice.reducer