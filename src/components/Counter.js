import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'
import { CounterActions } from '../Store/store';
const Counter = () => {
const dispatch= useDispatch();

 const counter= useSelector(state=>state.counter)
 const toggle= useSelector(state=>state.showCounter)
  const toggleCounterHandler = () => {
    dispatch (CounterActions.toggle() )
  }; 
const incrementC=()=>{
  dispatch( CounterActions.increment() )
}
const decrementC=()=>{
dispatch(CounterActions.decrement(5))
}
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {toggle && <div className={classes.value}>{counter}</div>}
      <button onClick={decrementC}>decrement</button>
      <button onClick={incrementC}>increment</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
