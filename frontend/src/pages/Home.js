import { React } from 'react';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import portrait from '../assets/technology.jpg';
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
		<main className="home" style={{ paddingTop: `${headerHeight}px` }}>
			<section className="content-section">
				<h1>Hello, Welcome</h1>
				<h3 style={{textAlign: 'center'}}>Am Arnold a Web Developer/FrontEnd Engineer</h3>
				<p style={{fontSize:'1.2rem', textAlign: 'center'}}>
					I specialize in bringing ideas to life through 
					clean and efficient code. My focus is on building responsive, dynamic websites that 
					prioritize performance and user engagement.
				</p>
				<button style={{background:'transparent', margin: '1.2rem', padding:'15px 25px', border:'1px solid #fff', color:'#fff'}}>CV download</button>
			</section>
			<section className="image-section">
				<img src={portrait} alt="mascot" className="mascot" />
			</section>
		</main>
	  </>
	);
  };
  

export default Home;