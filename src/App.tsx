import './reset.scss'
import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Login from './pages/public/login'
import { AuthProvider, RequireAuth } from './hoc/AuthProvider'
import { LandingPage } from './pages/public/landing-page'
import SignupPage from './pages/public/register'
import Welcome from './pages/private/Welcome'
import { Toaster } from 'react-hot-toast';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  & > svg {
    object-fit: fill;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    width: 98%;
  }
`
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <StyledContainer>
          <h1>Header Component Will Come Here</h1>
          <div className='content'>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/signup' element={<SignupPage />} />
              <Route path='/login' element={<Login />} />
              <Route
                path='welcome'
                element={
                  <RequireAuth>
                    <Welcome />
                  </RequireAuth>
                  
                }
              />
           </Routes>            
          </div>
          <h1>Footer Component Will Come Here</h1>
          <Toaster position="top-right" reverseOrder={false}/>
        </StyledContainer>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
