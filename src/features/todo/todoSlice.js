import { createSlice,nanoid } from "@reduxjs/toolkit";

//creating initial state
const initialState = {
    todos:[{id:1,text:"hello world"}]
}
//creating slices
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        //our reducer
        addTodo: (state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload //here payload is a 
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
    }
})
//exportng reducer functions
export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer

