import './App.css';
import LoginPage from './Component/Login';
import Routing from './Pages/Routing';
import {useSelector,useDispatch} from "react-redux";
import {login,logout} from "../src/feature/UserSlice";
import {onAuthStateChanged} from "firebase/auth";
import {useEffect} from "react";
import {auth} from "./firebase";

function App() {
  const use = useSelector((state)=>state.loginInfo.value);

  const dispatch = useDispatch()
useEffect(()=>{
 const x = onAuthStateChanged(auth,(userAuth)=>{
  if(userAuth){
    dispatch(login({
      uid:userAuth.uid,
      email:userAuth.email
    }))
  }else {
    dispatch(logout())
  }
 })
 return x;
},[])
  
  return (
    <div>
      {
        !use ? <LoginPage /> : <Routing />
      }      
    </div>
  );
}

export default App;
