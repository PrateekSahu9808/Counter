import { useRef } from "react";
import {useDispatch} from "react-redux"
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";


const Controls = () => {
        const dispatch = useDispatch()
        const inputElement= useRef();

        const handleIncrement =()=>{
          console.log("increment")
          dispatch(counterActions.increment())
          // dispatch({type:"INCREMENT"})

        } 
        const handleDecrement =()=>{
          console.log("decrement")
          dispatch(counterActions.decrement());
          // dispatch({type:"DECREMENT"})
          
        }
        const handleAdd=()=>{
           dispatch(counterActions.add(inputElement.current.value))

          inputElement.current.value=""
        }  
         const handleSubtract=()=>{
          
          dispatch(counterActions.subtract(inputElement.current.value))

          inputElement.current.value=""
        }

        const handlePrivacyToggle=()=>{
          
          dispatch(privacyActions.toggle());
          
        }
        
  return (
    <>
     <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}>
       +1
        </button>
        <button type="button" className="btn btn-outline-success  btn-lg px-4" onClick={handleDecrement}>
          -1
        </button>
        <button type="button" className="btn btn-warning  btn-lg px-4" onClick={handlePrivacyToggle}>
          Privacy toggle
        </button>
      </div>
    </div>
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type="text" placeholder="Enter number" className="number-input" ref={inputElement}/>
      
        <button type="button" className="btn btn-info  btn-lg px-4" onClick={handleAdd}>
          Add
        </button>
        <button type="button" className="btn btn-danger  btn-lg px-4" onClick={handleSubtract}>
          Subtract
        </button>
        
      </div>
    </div>
    </>
   
  );
};

export default Controls;
