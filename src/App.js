import React from "react";
import "./app.css"
import Periodicals from "./components/periodicals/periodicals"
import Frequency from "./components/frequency/frequency"
import { connect } from "react-redux";
import {  DRAGING } from "./redux/action"
 class App extends React.Component{
    constructor(props){
      super(props);
        this.state ={
        }
      }
        onDragOver=(e)=>{
          e.preventDefault();
        }
      // on drag set the id
        onDragStart =(e,id)=>{
          e.dataTransfer.setData("id",id)
        }
        // on drop get and where to drop
        onDrop = (ev, cat) => {   
          this.props.onDrop(ev, cat) 
        }
         render() {
               var tasks = { periodic: [], 
                              yearly: [],
                              halfYearly : [],
                              Threetimesyear :[],
                              quarterly :[],
                              Sixtimesyear:[],
                              asRequired:[],
                              hallwaysRotation :[],
                              na: []
                              }    
               return (
                 <>
               {this.props.tasks?.forEach((data)=>{
                  tasks[data.category].push(
                    <div className="sub_Sec" 
                         draggable
                          onDragStart ={(e)=>this.onDragStart(e,data.name)}>
                        <p className="sub_Sec_txt"> {data.name}</p>
                     </div>
                       )
                     
                   })}
                   <div className="header_container">
                      <h1>Drag And Drop</h1>
                   </div>
                    <Periodicals 
                    onDragOver={this.onDragOver}
                    onDrop={this.onDrop}
                    tasks={tasks}
                    />

                   <Frequency
                    tasks={tasks}
                    onDragOver={this.onDragOver}
                    onDrop={this.onDrop}
                    />
              
            </>
               )
              }
       
      }
    
  

 const mapDispatchToProps = dispatch => {
  return {
   
    onDrop : (ev, cat) => dispatch({ type: DRAGING ,event:ev, cat :cat })
  }
};
//  export default App;
const mapStateToProps = state => {
  return {
    tasks: state
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(App)