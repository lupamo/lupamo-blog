import { React } from 'react';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import portrait from '../assets/portrait-man.png';
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
		<div className="home" style={{ paddingTop: `${headerHeight}px`, display: 'flex', textAlign: 'center',  width: '100%', height: '100vh' }}>
			<div style={{height: '100%', flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: '#b23386', border: '1px solid black' }}>
				<h1 style={{fontSize: '4rem',}}>Welcome to<br></br> Lupamo's Lab</h1>
			</div>
		  	<div style={{height: '100%', flex: '1', display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
			  {<img src={portrait} alt='mascot' className='mascot'></img>}
			  <h2>Here you will find my projects, blogs, and other stuff</h2>
			</div>
		</div>
	  </>
	);
  };
  

export default Home;