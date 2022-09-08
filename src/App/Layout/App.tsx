import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../Features/About/About';
import Catalog from '../../Features/Catalog/Catalog';
import Deatails from '../../Features/Catalog/Deatails';
import Contact from '../../Features/Contact/Contact';
import Home from '../../Features/Home/Home';
import Header from './Header';

function App() {
  const [isLight, setIsdark] = useState<boolean>(false)
  const theme = createTheme({
    palette: {
      mode: isLight?'light':'dark',
      background:{
        default:isLight?'#eaeaea':'#121212'
      }
    }
   
  })
  useEffect(()=>{
      setIsdark(Boolean(localStorage.getItem('theme')==='true'?'':'dark'))
  },[])
  

  const handeChangeTheme = () => {
    setIsdark(!isLight)
    localStorage.removeItem('theme')
    localStorage.setItem('theme',String(isLight))
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header isLight={isLight} ChangeTheme={handeChangeTheme} />
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/catalog' element={<Catalog />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/catalog/:id' element={<Deatails/>}/>
        </Routes>
        
      </Container>

    </ThemeProvider>
  );
}

export default App;
