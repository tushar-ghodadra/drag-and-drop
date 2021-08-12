import React from "react";
import "./frequency.css"
const Frequency =(props) =>{
    return (
        <div>
  <div className="main_section">
              <h4>FREQUENCY</h4>
              <div className="drag_box">
                  <div className="drag_box_sub">
                     <div className="drage_wrapper">
                      
                        <div className="contex_drag"
                         onDragOver={(e)=>props.onDragOver(e)}
                         onDrop ={(e) =>props.onDrop(e,"yearly")}
                         >
                            <div className="header">
                               <p>{"yearly"}</p>
                               </div>
                               <div className="drag_value">
                               {props.tasks.yearly}
                               </div>
                            
                        </div>
                        <div className="contex_drag"
                         onDragOver={(e)=>props.onDragOver(e)}
                         onDrop ={(e) =>props.onDrop(e,"halfYearly")}
                         >
                            <div className="header">
                               <p>{"half yearly"}</p>
                               </div>
                               <div className="drag_value">
                               {props.tasks.halfYearly}
                               </div>
                            
                        </div>
                        <div className="contex_drag"
                         onDragOver={(e)=>props.onDragOver(e)}
                         onDrop ={(e) =>props.onDrop(e,"Threetimesyear")}
                         >
                            <div className="header">
                               <p>{"3 times a year"}</p>
                               </div>
                               <div className="drag_value">
                               {props.tasks.Threetimesyear}
                               </div>
                            
                        </div>
                        <div className="contex_drag"
                         onDragOver={(e)=>props.onDragOver(e)}
                         onDrop ={(e) =>props.onDrop(e,"quarterly")}
                         >
                            <div className="header">
                               <p>{"quarterly"}</p>
                               </div>
                               <div className="drag_value">
                               {props.tasks.quarterly}
                               </div>
                            
                        </div>
                        <div className="contex_drag"
                         onDragOver={(e)=>props.onDragOver(e)}
                         onDrop ={(e) =>props.onDrop(e,"Sixtimesyear")}
                         >
                            <div className="header">
                               <p>{"6 times a year"}</p>
                               </div>
                               <div className="drag_value">
                               {props.tasks.Sixtimesyear}
                               </div>
                            
                        </div>
                        <div className="contex_drag"
                         onDragOver={(e)=>props.onDragOver(e)}
                         onDrop ={(e) =>props.onDrop(e,"hallwaysRotation")}
                         >
                            <div className="header">
                               <p>{"hallways on rotation"}</p>
                               </div>
                               <div className="drag_value">
                               {props.tasks.hallwaysRotation}
                               </div>
                            
                        </div>
                        <div className="contex_drag"
                         onDragOver={(e)=>props.onDragOver(e)}
                         onDrop ={(e) =>props.onDrop(e,"asRequired")}
                         >
                            <div className="header">
                               <p>{"as required"}</p>
                               </div>
                               <div className="drag_value">
                               {props.tasks.asRequired}
                               </div>
                            
                        </div>
                        <div className="contex_drag"
                         onDragOver={(e)=>props.onDragOver(e)}
                         onDrop ={(e) =>props.onDrop(e,"na")}
                         >
                            <div className="header">
                               <p>{"na"}</p>
                               </div>
                               <div className="drag_value">
                               {props.tasks.na}
                               </div>
                            
                        </div>
                        
                       
                     </div>
                  </div>
              </div>
        </div>
        </div>
    )
}
export default Frequency;
