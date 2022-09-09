import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from './UserSlice';
function User(props) {
    const dispath = useDispatch();
    const onLogOut = () =>{
        dispath(userSlice.actions.logout())
    }
    const user = useSelector(state=>state.user);
    return (
        <div>
            USER INFO
            <br />
            TOKEN: {user.token}
            <br />
            ASSET: {user.asset}
            <button onClick={onLogOut}>Đăng xuất</button>
        </div>
    );
}

export default User;