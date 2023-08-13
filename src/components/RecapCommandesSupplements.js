import { useDrop } from 'react-dnd'
import { useState } from 'react'
import {TiDelete} from 'react-icons/ti'
import { ItemTypes } from '../items/ItemTypes'
import { useDispatch, useSelector } from 'react-redux'
import {updateAfterDrop, listeSupplementsActual, removeSupplement} from "../reducer/pizzaSlice";
import styleListeSupplement from '../styles/SupplementsCss.module.css'

export function RecapCommandesSupplements(props) {
  let [hasDropped, setHasDropped] = useState(false)
  let listeSupp = useSelector(listeSupplementsActual)
  const dispatch = useDispatch()
  let idCommande = props.pizzCommande
  const [{ canDrop, isOver,hasDropActu, item}, drop] = useDrop(() => ({
    accept: ItemTypes.Supplements,
    item : {props},
    drop: (monitor) =>({ 
      name: {props} 
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      hasDropActu : hasDropped,
      item : monitor.getItem(),
    }),
  }), [setHasDropped])

  return <td key={idCommande}  ref={drop} onDrop={() => dispatch(updateAfterDrop([{ canDrop, isOver,hasDropActu, item, idCommande}, drop].at(0)))}>
    {listeSupp.filter(x => x.idCommande === idCommande).map((monSupplement) => (
        <span key={{idCommande, monSupplement}} className={styleListeSupplement.miseEnformeTableau}>{monSupplement.supplement}
        <i key={{idCommande, monSupplement}} className={styleListeSupplement.close} onClick={()=> dispatch(removeSupplement({idCommande, listeSupp, monSupplement}))}><TiDelete/></i></span>
    ))}</td>

  
  
}