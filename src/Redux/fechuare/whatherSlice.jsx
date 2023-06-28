import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    data:[],
    error:""
}

const fecthWhather=createAsyncThunk("whather/fecthWhather",async(city)=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3e1d1194ea3cf297e78cc150dab88d61`
    const response=await fetch(url)
    const data=await response.json()
    return data
})

const whaterSlice=createSlice({
    name:"whather",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fecthWhather.pending,(state)=>{
            state.loading=true
        });
        builder.addCase(fecthWhather.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload
            state.error=""
        })
        builder.addCase(fecthWhather.rejected,(state,action)=>{
            state.loading=false
            state.data=[]
            state.error=action.error.message
        })
    }
})

export default whaterSlice.reducer
export {fecthWhather}