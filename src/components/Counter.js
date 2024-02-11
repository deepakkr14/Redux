import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'
const Counter = () => {
const dispatch= useDispatch();

 const counter= useSelector(state=>state.counter)
  const toggleCounterHandler = () => {}; 
const incrementC=()=>{
  dispatch( {type:"INCREMENT",payload:5} )
}
const decrementC=()=>{
dispatch( { type: "DECREMENT" ,payload:5})
}
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={decrementC}>decrement</button>
      <button onClick={incrementC}>increment</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
