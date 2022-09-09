import React from 'react';
import { useDispatch } from 'react-redux';
import { userSlice } from './user/UserSlice';
function Login(props) {
    const dispath = useDispatch();
    //fake data login
    const fakeData = {
        token: "shar256kjhsabdkqwjvjfajdlaskdlasdbqwheqvasdasdf",
        asset: 10000
    }

    const handleLogin = () =>{
        dispath(userSlice.actions.login(fakeData))
    }
    return (
        <button style={{witdth: 60,height: 30, backgroundColor: "lightblue"}} onClick={handleLogin}>Click để login</button>
    );
}

export default Login;