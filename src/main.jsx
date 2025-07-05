// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import TodoList from './TodoList/Main'
import Main from './LeaderBoard/Main'

createRoot(document.getElementById('root')).render(
  
  // <App />
  <TodoList/>
  // <Main/>
  
)
