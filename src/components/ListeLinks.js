
import {deconnecteUser, isLoginUser, roleUser} from '../reducer/userSlice'
import { Link, useNavigate} from "react-router-dom";
import style from '../styles/PizzaCss.module.css'
import { useDispatch, useSelector } from "react-redux";

export function ListeLinks(){
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const isLogIn = useSelector(isLoginUser)
    const roleActu = useSelector(roleUser)
    return (
    (isLogIn && roleActu === 'admin') && <>
            <Link className={style.links} to={'/mesPizzas'}> NOS PIZZAS</Link>
            <Link className={style.links} to='/catalogue'> NOTRE CATALOGUE</Link>
            <Link className={style.links} to='/gestion'> GESTION </Link>
            <button className={style.deConnecte} onClick={() =>{
                dispatch(deconnecteUser(''))
                navigate('/')
            }}>Deconnexion</button>
            </>
            ) || ( (isLogIn && roleActu !== 'admin') && <>
            <Link className={style.links} to={'/mesPizzas'}> NOS PIZZAS</Link>
            <Link className={style.links} to='/catalogue'> NOTRE CATALOGUE</Link>
            <Link className={style.links} to='/monEspace'> MON ESPACE </Link>
            <button className={style.deConnecte} onClick={() =>{
                dispatch(deconnecteUser(''))
                navigate('/')
            }}>Deconnexion</button>
            </>)
            
}