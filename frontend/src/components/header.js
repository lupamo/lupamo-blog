import { React } from 'react';
import '../css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
	<Navbar expand= "lg" className="bg-body-tertiary, header">
		<Container className='contain'>
			<Navbar.Brand href="#home">Lupamo's Blog</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
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