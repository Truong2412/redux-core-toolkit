import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../app/actions';
function Login(props) {
    const dispath = useDispatch();
    //fake data login
    const fakeData = {
        token: "shar256kjhsabdkqwjvjfajdlaskdlasdbqwheqvasdasdf",
        asset: 10000
    }
    //dispath đến action Login trong "actions"
    const handleLogin = () =>{
        dispath(login(fakeData))
    }
    return (
        <button style={{witdth: 60,height: 30, backgroundColor: "lightblue"}} onClick={handleLogin}>Click để login</button>
    );
}

export default Login;