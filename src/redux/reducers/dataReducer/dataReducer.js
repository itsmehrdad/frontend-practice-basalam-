import {createSlice} from "@reduxjs/toolkit";
import {stat} from "fs";

const init =
{
      dataList: []
}

const dataReducer = createSlice({
    name : 'dataReducer',
    initialState : init,
    reducers : {     //fuctions we want for datalist
        add : (state , action) => {
           state.dataList.push('added')  
        },
        remov : (state , action) => {
            state.dataList = []
        }
    }
})

export const {add,remov} = dataReducer.actions
export default dataReducer.reducer