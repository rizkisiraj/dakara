
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import logo from '../assets/logo.png';


function Navbar1() {
    const menus = [
                 { name: "INTRO" },
                 { name: "HOME" },
                 { name: "TALENT" },
                 { name: "ABOUT" },
                 { name: "NEWS" },
                 { name: "MERCH" },
             ]
    const [navbar, setNavbar] = useState(false);
    const [color, setColor] = useState('light');
    const changeBg = () => {
        if (window.scrollY >= 90){
            setNavbar(true);
            setColor ('light') ;
        }else{
            setNavbar(false);
            setColor ('dark');
        } 
    }

    window.addEventListener('scroll', changeBg); 
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="" variant={color} expand={expand} className={`mb-3 z-10 text-white ${navbar ? 'bg-white text-black' : 'bg-transparent'}`} sticky='top'>
          <Container fluid>
            <Navbar.Brand href="" className=' text-md font-bold ml-5'><img src={logo} alt="" width={50} className='inline-block' /><span className='ml-2'>Dakara ID</span></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Dakara ID
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='text-white'>

                <Nav className="justify-content-end flex-grow-1 pe-5 font-semibold">
                    {menus.map((menu) => (
                    <Nav.Link className='hover:border-b-2 '>{menu.name}</Nav.Link>
                    ))
                    }
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbar1;