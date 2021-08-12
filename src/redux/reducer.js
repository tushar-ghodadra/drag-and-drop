import {  DRAGING } from "./action"

const initialState =[{ name: "Bathroom floor", category : "periodic" },
{ name: "Full window clean", category : "periodic" },
{ name: "Lounge chairs", category : "periodic" },
{ name: "Dining room Chairs", category : "periodic" },
{ name: "High level Cleaning", category : "periodic" },
{ name: "Vacant room clean", category : "periodic" },
{ name: "Carpet steam cleaning ", category : "periodic" },
{ name: "Ceiling fans cleaning", category : "periodic" },
{ name: "floor scrubbing", category : "periodic" },
{ name: "Courtyard", category : "periodic" },
]
export const handleDrag =(state,action) =>{
    let id = action.event.dataTransfer.getData("id"); 
    let tasks = state.filter((task) => {  
          if (task.name == id) {          
           task.category = action.cat;   
            } 
       return task;          
     });      
    return tasks
}
export const DragSystem = (state = initialState, action) => {
    console.log(action ,"action")
    switch  (action.type) {
        
        case DRAGING :
            return handleDrag(state,action)
        default :
        return state;
        }
    } 

