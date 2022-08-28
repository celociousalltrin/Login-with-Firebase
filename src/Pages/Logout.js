import React from 'react';
import {signOut} from "firebase/auth";
import { auth} from "../../src/firebase";

const Logout = () => {
  const signAway = ()=>{
    signOut(auth)
  }
  return (
    <div>
      <button onClick={signAway}>SignOut</button>
    </div>
  )
}

export default Logout;