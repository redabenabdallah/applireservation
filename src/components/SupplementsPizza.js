import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../items/ItemTypes'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import styleListeSupplement from '../styles/SupplementsCss.module.css'

export default function Supplements({ isDragging, text, prix }, props) {
  const dispatch = useDispatch()
  let [droppedItem, updateDroppedItem]=useState('')
    const [{ opacity }, dragRef] = useDrag(
      () => ({
        type: ItemTypes.Supplements,
        item: { text, prix },
        collect: (monitor) => ({
          item: monitor.getItem(),
          opacity: monitor.isDragging() ? 0.5 : 1
        }),
        end: (item, monitor) => {
          const dropResult = monitor.getDropResult()
          if (item && dropResult) {
            updateDroppedItem(item.text)
          }
        },
      }),
      []
    )
    return (
      <div>
      <span className={styleListeSupplement.encadreListe} ref={dragRef} style={{ opacity }}>
        {text} : {prix} euros
      </span>
      </div>
    )
  }