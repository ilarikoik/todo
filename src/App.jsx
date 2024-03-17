import { useState } from 'react'
import './App.css'
import Todo from './Todo'
import TodoForm from './TodoForm'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {

  return (
    <div >
      <Container  maxWidth="x1"> {/* Container component, which is basic layout component, and it centers your app content horizontally. maxWidth props defines the maximum width of our app, and we are using the largest value */}
      <Todo></Todo>
      </Container>
    </div>
  )
}

export default App
