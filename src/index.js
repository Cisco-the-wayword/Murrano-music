import React from 'react'
import { createRoot } from 'react-dom' // Import createRoot from 'react-dom'
import HomePage from './Components/Homepage' // Import the HomePage component

createRoot(document.getElementById('root')).render( // Use createRoot().render()
  <React.StrictMode>
    <HomePage /> {/* Render the HomePage component */}
  </React.StrictMode>
)
