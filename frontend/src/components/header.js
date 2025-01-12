import { React } from 'react';
import '../css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
	<Navbar expand= "lg" className="bg-body-tertiary, header">
		<Container fluid className='px-4'>
			<div className="d-flex align-items-center justify-content-between w-100">
				<Navbar.Brand href="#home">Lupamo.Dev</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-toggler' />
			</div>
			
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ms-auto">
					<Nav.Link href="#">Home</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/about">Blogs</Nav.Link>
					<Nav.Link href="/about">Projects</Nav.Link>
					<Nav.Link href="/about">Contact</Nav.Link>
				</Nav>
				</Navbar.Collapse>
		</Container>
	</Navbar>
  );
}

export default Header;