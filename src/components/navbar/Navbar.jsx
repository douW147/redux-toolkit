import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import userSlice from "../../slices/user";
import "./index.css"

function Navbar() {

    const [user, setUser] = useState("");
    const currentUser = useSelector(state => state.user);
    const dispatch = useDispatch();
    const onLoginClick = () => {
        if (user !== "") {
            dispatch(userSlice.actions.login(user));
            setUser("");
        };
    };

    const onLogoutClick = () => {
        dispatch(userSlice.actions.logout());
    }

    return <div className="row naavbar shadow --width100">
        <div className="col-12">
            <div className="m-5">
                {currentUser.isLoggedIn === false ? 
                    <div className="form-group">
                        <input className="form-control --width25" placeholder="username" value={user} onChange={(event) => {setUser(event.target.value)}}></input>
                        <button className="btn btn-outline-dark" onClick={onLoginClick}>Login</button>
                    </div>
                :
                    <div>
                        <h4>{currentUser.userName}</h4>
                        <button className="btn btn-outline-dark" onClick={onLogoutClick}>Logout</button>
                    </div>
                }
            </div>
        </div>
    </div>
}

export default Navbar;