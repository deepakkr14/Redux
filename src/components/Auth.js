import classes from './Auth.module.css';

const Auth = (props) => {
  const login=(e)=>{
    e.preventDefault()
    props.authe()
    console.log('i am login')
  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={login}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
