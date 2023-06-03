import main from '../assets/images/main.svg';
import React from 'react'
import Wrapper from '../assets/wrappers/Testing';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>job <span>tracking</span> app </h1>
            <p>
            I'm baby truffaut live-edge pop-up solarpunk. Direct trade chambray kombucha, seitan everyday carry asymmetrical chartreuse 90's waistcoat. Ascot solarpunk irony, master cleanse post-ironic
            </p>
            <Link to='/register' className='btn btn-hero'> Login/Register </Link>
          </div>
          <img src={main} alt='jon hunt' className='img main-img'/>
        </div>
    </Wrapper>
  )
}

export default Landing;