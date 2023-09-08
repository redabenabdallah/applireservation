import { useDispatch, useSelector } from "react-redux"
import { addUser, listeUsers, orderListeUsers, sortListUser, colActif, messageUserAdd } from "../reducer/userSlice"
import { useState } from "react";
import {TiUser} from 'react-icons/ti'
import style from '../styles/AjoutUtilisateur.module.css'
import {Snackbar} from '@mui/material'
import moment from 'moment'

function formInvalide(user,ancienneté,birth, role) {
    let isInvalide = true
    if(user !== "" && 0<=ancienneté && ancienneté<=20  && role !== "" && role !== undefined  && !(new Date(birth) instanceof Date && !isNaN(birth))){
        isInvalide = false
    }
    return isInvalide
}



function showMsg(msg){
    return <><Snackbar
    open={true}
    message={msg}
  /></> 
}


export function AjoutUtilisateur(){
    const [isHide, setIsHide] = useState(true);


    const handleButtonClick = () => {
       setIsHide(false);

       setTimeout(() => {
        setIsHide(true);
       }, 5000);
    }

    const dispatch = useDispatch()
    const listeUser = useSelector(listeUsers)
    const orderDefine = useSelector(orderListeUsers)
    const colToSort = useSelector(colActif)
    const messageUserActu = useSelector(messageUserAdd)
    const [userNameToAdd, updateUserNameToAdd] = useState("");
    const [userAgeToAdd, updateUserAgeToAdd] = useState("");
    const [userBirthToAdd, updateUserBirthToAdd] = useState("");
    const [userRoleToAdd, updateUserRoleToAdd] = useState("");
    return (<>
    <span><h3>AJOUT UTILISATEUR</h3></span>
    <form>
        <div id='addUserName'><label>Nom:* </label><input type='text' value={userNameToAdd} onChange={(e) => {formInvalide(e.target.value) ; updateUserNameToAdd(e.target.value)}}/></div>
        <div id='addUserAge'><label>Ancienneté:* </label><input type='number' value={userAgeToAdd} max={20} min={0} onChange={(e) => {formInvalide(e.target.value) ;updateUserAgeToAdd(e.target.value)}}/></div>
        <div id='addUserBirthDay'><label>Date de naissance:* </label><input type='date' value={userBirthToAdd} onChange={(e) => {formInvalide(e.target.value ) ;updateUserBirthToAdd(e.target.value)}}/></div>       
        <div id='addUserRole'><label>Role:* </label>
        <select name="role" id="role-select" value={userRoleToAdd} onChange={(e) => {formInvalide(e.target.value) ;updateUserRoleToAdd(e.target.value)}}>
            <option value=""></option>
            <option value="admin">Admin</option>
            <option value="client">Client</option>
            <option value="cuisinier">Cuisinier</option>
        </select>
        </div>
        <button id='addUser' disabled={formInvalide(userNameToAdd,userAgeToAdd,userBirthToAdd, userRoleToAdd )} 
        onClick={()=> { dispatch(addUser({"name": userNameToAdd , "pwd": "Test", "ancienneté":userAgeToAdd, "naissance" : userBirthToAdd ,"role": userRoleToAdd}))
        ; handleButtonClick()}} type='button'>Ajouter</button>
        {!isHide ? showMsg(messageUserActu) : null}
    </form>
    
    <br/>
        <div className={style.listeUsers}>
        <table id='listeUsers'>
            <thead>
            <tr>
            <th onClick={() => {dispatch(sortListUser({'orderSort': {orderDefine}, 'colName' : 'name'})) }} style={{cursor:'pointer'}}>Nom {colToSort === 'name' && orderDefine === 'asc' ? <i>▲</i> : <i>▼</i> }</th>
            <th onClick={() => {dispatch(sortListUser({'orderSort': {orderDefine}, 'colName' : 'ancienneté'})) }} style={{cursor:'pointer'}}>Ancienneté {colToSort === 'ancienneté' && orderDefine === 'asc' ? <i>▲</i> : <i>▼</i>}</th>
            <th onClick={() => {dispatch(sortListUser({'orderSort': {orderDefine}, 'colName' : 'naissance'})) }} style={{cursor:'pointer'}}>Date de naissance {colToSort === 'naissance' && orderDefine === 'asc' ? <i>▲</i> : <i>▼</i> }</th>
            <th onClick={() => {dispatch(sortListUser({'orderSort': {orderDefine}, 'colName' : 'role'})) }} style={{cursor:'pointer'}}>Role {colToSort === 'role' && orderDefine === 'asc' ? <i>▲</i> : <i>▼</i>}</th>
            </tr>
            </thead>
            <tbody>        
                {listeUser.map((u) => (
                    <tr key={u.name}><td><i><TiUser/></i>{u.name}</td>
                    <td>{u.ancienneté}</td>
                    <td>{moment(new Date(u.naissance)).format('DD/MM/YYYY')}</td>
                    <td>{u.role}</td>
                    </tr>)) }
            </tbody>
        </table>        
        </div> 
    </>)
}