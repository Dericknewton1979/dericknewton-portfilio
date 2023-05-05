import React from "react";
import Home from "./pages/Home";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import Mylogo from "./app/assets/img/Mylogo.PNG";
import './App.css';




function App() {
  return (
    <div className="App">
        <Navbar dark color='primary' sticky='top' expand= 'md'>
            <Container>
                <NavbarBrand href='/'>
                      <img className="my-logo" src={Mylogo} alt='derick logo' />
                </NavbarBrand>
            </Container>
        </Navbar>
        <Home/>
    </div>
    
  )
}

export default App;
