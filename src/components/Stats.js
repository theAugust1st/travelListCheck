import React from 'react'

function Stats({items}) {
  if(!items.length) return <p className='stats'> Start adding some items</p>
  const X = items.length
  const packed = items.filter(item=>item.packed).length
  const percentage = Math.round(((packed/X))*100)
 return (
    <footer className='stats'>{percentage === 100 ? <em>You get everything ready to go.</em>:<em>The {X} number of list is listed, you already packed {packed} which is ({Math.round((packed/X)*100)})%.</em>}
      </footer>
  )
}
export default Stats
