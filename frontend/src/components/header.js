import { React } from 'react';
import '../css/header.css';
const Header = () => {
  return (
	<div className="header">
		<h1 className="logo">Lupamo's <span>Lab</span></h1>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/about">Blogs</a></li>
				<li><a href="/about">Projects</a></li>
				<li className="contact"><a href="/about">Contact</a></li>
			</ul>
		</nav>
	</div>
  );
}

export default Header;