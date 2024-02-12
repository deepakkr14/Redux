import Auth from './components/Auth'
import Header from './components/Header'
import Profile from './components/UserProfile'
import Counter from './components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from './Store/AuthSlice'; 
function App() {
  
  const dispatch= useDispatch();
  const authenticated = useSelector((state) => state.auth.auth);
  const toggleCounterHandler = () => {

    dispatch (AuthActions.toggle() )
  }; 
  return (
    <>
<Header/>
{!authenticated &&<Auth authe={toggleCounterHandler}/>}
{authenticated && <Profile/>}
    <Counter/>
    </>
  );
}

export default App;
