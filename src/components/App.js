import React from 'react'
import Logo from './Logo.js'
import Form from './Form.js'
import PackingList from './PakingList.js' // Corrected import
import Stats from './Stats.js'
function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList /> {/* Corrected usage */}
      <Stats />
    </div>
  )
}

export default App