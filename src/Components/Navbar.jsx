
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import logo from '../assets/logo.png';


function Navbar1() {
    const location = useLocation();
    const menus = [
                 { name: "intro" },
                 { name: "home" },
                 { name: "talent" },
                 { name: "about" },
                 { name: "merch" },
             ]
    const [navbar, setNavbar] = useState(false);
    const [color, setColor] = useState('dark');
    const changeBg = () => {
        if (window.scrollY >= 90){
            setNavbar(true);
            setColor ('dark') ;
        }else{
            setNavbar(false);
            setColor ('dark');
        } 
    }

    window.addEventListener('scroll', changeBg); 
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="" variant={color} expand={expand} className={`mb-3 z-90 font-sans text-white ${navbar ? ' bg-slate-900 text-black' : 'bg-transparent'}`} fixed='top'>
          <Container fluid>
            <Navbar.Brand href="" className=' text-md font-bold ml-5'><img src={logo} alt="" width={50} className='inline-block' /><span className='ml-2'>Dakara ID</span></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className='bg-transparent'
            >
              <Offcanvas.Header closeButton className='text-black bg-white py-4'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Dakara ID
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='text-white max-lg:bg-white/20'>

                <Nav className="justify-content-end flex-grow-1 pe-5 font-semibold">
                    {menus.map((menu) => (
                    <Nav.Link href={`/${menu.name === 'intro' ? '' : menu.name}`} className={`navbar-link ${location.pathname === `/${menu.name}` ? 'active-navbar' : ''}`}>{menu.name}</Nav.Link>
                    ))
                    }
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet />
    </>
  );
}

export default Navbar1;