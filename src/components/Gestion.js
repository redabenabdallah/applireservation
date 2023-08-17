import {AjoutUtilisateur} from './AjoutUtilisateur'
import {ListeLinks} from '../components/ListeLinks'

export function Gestion(){
    return (<>
    <ListeLinks/>
    <div>Espace administrateur</div>
    <AjoutUtilisateur/>
    </>)
}