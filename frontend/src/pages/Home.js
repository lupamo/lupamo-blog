import { React } from 'react';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import '../css/home.css';

const Home = () => {
	const [headerHeight, setHeaderHeight] = useState(0);
  
	useEffect(() => {
	  const headerEl = document.querySelector('.header');
	  setHeaderHeight(headerEl?.offsetHeight || 0);
	}, []);
  
	return (
	  <>
		<Header />
		<div className="home" style={{ paddingTop: `${headerHeight}px` }}>
		  <h1>Welcome to Lupamo's Lab</h1>
		  <p>Here you will find my projects, blogs, and other stuff.</p>
		</div>
	  </>
	);
  };
  

export default Home;