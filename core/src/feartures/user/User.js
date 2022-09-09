import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../app/actions';
function User(props) {
    const dispath = useDispatch();
    const onLogOut = () =>{
        dispath(logout())
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