import { useState } from 'react';
import {UserPizza} from '../data/UserPizza'
import { useNavigate } from 'react-router-dom';
import styleForm from '../styles/LoginForm.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {currentUser, updateUserConnecte, updateUserRoleConnecte} from '../reducer/userSlice'

function verifUser(name, pwd) {
    const userPizza = new UserPizza()
    const correspondance = userPizza.listeUser.filter(u => u.name === name && pwd === u.pwd)
    if(correspondance.length > 0){
        return {'isAuthenticated':true, 'role': correspondance.at(0).role}
    } else {
        alert(`Erreur authentification`);
        return {'isAuthenticated':false, 'role': null}
    }
    
  }

export function LoginComp (props){
    const navigate = useNavigate();
    const userName = useSelector(currentUser)
    const dispatch = useDispatch()
    const [pwd, setPwd] = useState("");
    return <>    
    <form className={styleForm.loginBox}>
    <div>
        <label>UserName</label>
        <input id="inputUserLogin" type="text" 
          value={userName}
          onChange={(e) => dispatch(updateUserConnecte(e.target.value))} ></input>
    </div>
    <div>
        <label>Mot de Passe</label>
        <input id="inputUserPwd" type="password"    value={pwd}
          onChange={(e) => setPwd(e.target.value)} ></input>
    </div>
    <div>
        <button id='loginUserBtn' onClick={()=> {
        const checkUser = verifUser(userName, pwd);
        checkUser.isAuthenticated ? dispatch(updateUserRoleConnecte(checkUser.role)) && navigate('/mesPizzas') : navigate('/')
        }} type='button'>Connexion</button>
    </div>
</form></>

}