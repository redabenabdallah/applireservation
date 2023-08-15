import style from '../styles/CataloguePizzas.module.css'
import {useDispatch} from "react-redux";
import {pageHasChanged} from "../reducer/pizzaSlice";
import {ListeLinks} from '../components/ListeLinks'

let homePizzas = [
    {
        'type': 'napolitaine',
        'sauce ': 'tomate',
        'piquant': 'non',
        'prix': '6 euros',
        'nbTotal': 3,
        'ingredients': 'olive, fromage, anchois, basilic'
    },
    {
        'type': 'kebab', 'sauce ': 'tomate', 'piquant': 'oui', 'prix': '10 euros', 'nbTotal': 5,
        'ingredients': 'oeuf, fromage, kebab'
    },
    {
        'type': 'tono', 'sauce ': 'tomate', 'piquant': 'non', 'prix': '9 euros', 'nbTotal': 4,
        'ingredients': 'olive, fromage, thon, basilic'
    },
    {
        'type': 'hot spicy', 'sauce ': 'tomate', 'piquant': 'grave', 'prix': '15 euros', 'nbTotal': 1,
        'ingredients': 'olive, fromage, poulet, basilic'
    },
    {
        'type': 'montagnard',
        'sauce ': 'creme fraiche',
        'piquant': 'non',
        'prix': '20 euros',
        'nbTotal': 2,
        'ingredients': 'gruyere, pomme de terre, charcuterie'
    },
    {
        'type': 'petitPapaNoel', 'sauce ': 'tomate', 'piquant': 'non', 'prix': '500 euros', 'nbTotal': 2,
        'ingredients': 'olive, fromage, cerf, paprika'
    }
]

export function CataloguePizzas() {
    const dispatch = useDispatch()
    dispatch(pageHasChanged())
    return <>
        <ListeLinks/>
        <br/>
        <div className={style.cataloguePizzas}>{homePizzas.map((p) => (
            <div key={p.type}><span className={style.typePizza}> {p.type} </span>{': ' + p.ingredients}</div>
        ))}</div>
    </>
}