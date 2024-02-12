import classes from './Header.module.css';
import { useDispatch,useSelector} from 'react-redux';
import { AuthActions } from '../Store/AuthSlice';

const Header = () => {
const  dispatch = useDispatch();
const isAuthenticated=useSelector(state=> state.auth.auth)
const logout=(e)=>{
  e.preventDefault()
  dispatch(AuthActions.toggle())
}
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
          { isAuthenticated && <button onClick={logout}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
