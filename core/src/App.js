
import './App.css';
import { useSelector } from 'react-redux';
import Login from './feartures/Login';
import User from './feartures/user/User';
import Doc from './feartures/Doc';
function App() {
  const user = useSelector(state=>state.user);

  const checkUserLogin = ()=>{
    if(!user.token){
      return (
        <>
        <p>user not yet login</p>
          <Login />
        </>
      )
    }else{
      return (
        <User />
      )
    }
  }
  return (
    <>
      <h2 style={{color: "green"}}>REDUX CORE in one hour</h2>
      <Doc/>
      <p>using redux handle USER LOGIN AND LOGOUT</p>
      {checkUserLogin()}
    </>
  );
}

export default App;
