import React from "react";
import "./periodicals.css"
const Periodicals =(props) =>{
    return (
        <div style={{marginTop:"100px"}}>
          <div className="main_section">
              <h4>PERIODICALS</h4>
              <div className="section_details">
                 <div className="section_ui">
                     <div className="section"  onDragOver={(e)=>props.onDragOver(e)}
                         onDrop ={(e) =>props.onDrop(e,"periodic")}>
                         {props.tasks.periodic}
                     </div>
                 </div>
              </div>
          </div>
        </div>
    )
}

export default Periodicals;

