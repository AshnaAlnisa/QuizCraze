import React from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();  // Use useNavigate to get the navigate function

    const handleClick = () => {
        navigate('/login');
    };

  return (
    <>
        <div className='hero'>
            <div className='navbar'>
                <img src='images/logo.png' className='logo'/>
                <button type='button' className='navbar-button' onClick={handleClick}>Sign up</button>
            </div>
            <div className='content'>
                <h5>Welcome to our</h5>
                <h1>World's<br/> Best QuizCraze!</h1>
                <p>Dive into the ultimate trivia experience with QuizCraze!<br/> Whether you're a trivia buff or a casual quizzer,<br/> we've got something for everyone.</p>
                <p>Keep your brain sharp with our daily quiz challenges.<br/> New quizzes are added every day to keep you engaged<br/> and entertained.</p>
                <p>Our interactive interface makes quizzing fun<br/> and engaging. Enjoy a seamless experience on <br/>both desktop and mobile.</p>
            </div>
            <div className='bubbles'>
                <img src='images/bubble.png'></img>
                <img src='images/bubble.png'></img>
                <img src='images/bubble.png'></img>
                <img src='images/bubble.png'></img>
                <img src='images/bubble.png'></img>
                <img src='images/bubble.png'></img>
                <img src='images/bubble.png'></img>
            </div>
        </div>
    </>
    
  )
}

export default Home