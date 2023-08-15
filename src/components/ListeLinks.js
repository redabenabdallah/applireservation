
import {isLoginUser, roleUser} from '../reducer/userSlice'
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";
import style from '../styles/PizzaCss.module.css'

export function ListeLinks(){
    const isLogIn = useSelector(isLoginUser)
    const roleActu = useSelector(roleUser)
    return (
    (isLogIn && roleActu === 'admin') && <>
            <Link className={style.links} to={'/mesPizzas'}> NOS PIZZAS</Link>
            <Link className={style.links} to='/catalogue'> NOTRE CATALOGUE</Link>
            <Link className={style.links} to='/gestion'> GESTION </Link>
            </>
            ) || ( (isLogIn && roleActu !== 'admin') && <>
            <Link className={style.links} to={'/mesPizzas'}> NOS PIZZAS</Link>
            <Link className={style.links} to='/catalogue'> NOTRE CATALOGUE</Link>
            <Link className={style.links} to='/monEspace'> MON ESPACE </Link>
            </>)
}