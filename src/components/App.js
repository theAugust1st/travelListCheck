import React, { useEffect, useState } from 'react'
import Logo from './Logo.js'
import Form from './Form.js'
import PackingList from './PakingList.js' // Corrected import
import Stats from './Stats.js'
function App() {
  const[items,setItems] = useState([]);
  function handleOnAddItems(item){
    setItems(items=>[...items,item])
  }
  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleOnAddItems}/>
      <PackingList items={items}  />
      <Stats />
    </div>
  )
}

export default App