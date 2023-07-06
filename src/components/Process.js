import React, { useEffect } from 'react'
// import Confetti from 'react-confetti';
import JSConfetti from "js-confetti";

function Process(props) {
  const jsConfetti = new JSConfetti(); 

  //색종이 커스터마이징
  const fireWorkHappy = () => {
    jsConfetti.addConfetti({
      confettiColors: [
        " rgba(254, 58, 58, 0.8)",
        "rgba(248, 242, 85, 0.8)",
        "rgba(102, 201, 86, 0.8)",
        "rgba(66, 197, 254, 0.8)",
      ],
      confettiNumber: 500,
    });
  };


  useEffect(()=> {
    fireWorkHappy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const firstCircle = 'background: conic-gradient(rgba(254, 58, 58, 0.8) 25%, #fff 0)';
  return (
    
    <section className='progress'>
  
      <h2>영입 절차</h2>
      <article className='flex'>
      <div className='circle'>
      <div className={`progress-bar ${props.thema === 0 ? 'origin' : props.thema === 1 ? 'linear' : 'light'}`} style={{background: firstCircle}}  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <img src={`${process.env.PUBLIC_URL}/images/code.png`} alt="코딩" />
      </div>
      <p>이력서, Git Hub...<br/>
      서류와 코드를 통해<br/>
      저를 확인해 주세요</p> 
      </div>
      
      <div className='circle'>
      <div className={`progress-bar ${props.thema === 0 ? 'origin' : props.thema === 1 ? 'linear' : 'light'}`} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      <img src={`${process.env.PUBLIC_URL}/images/discussion.png`} alt="코딩" />
      </div>
      <p>1차, 2차...<br/>
      대화를 통해<br/>
      저를 확인해 주세요</p> 
      </div>

      <div className='circle'>
      <div className={`progress-bar ${props.thema === 0 ? 'origin' : props.thema === 1 ? 'linear' : 'light'}`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
      <img src={`${process.env.PUBLIC_URL}/images/firework.png`} alt="코딩" />
      </div>
      <p>감사합니다!<br/>
      합격을<br/>
      통보해 주세요</p> 
      </div>

      <div className='circle'>
      <div className={`progress-bar ${props.thema === 0 ? 'origin' : props.thema === 1 ? 'linear' : 'light'}`}  role="progressbar" aria-valuenow="100" 
      aria-valuemin="0" aria-valuemax="100">
      <img src={`${process.env.PUBLIC_URL}/images/folded-hands.png`} alt="코딩" />
      </div>
      <p>입사일!<br/>
      반가운 마음으로<br/>
      환영해 주세요</p> 
      </div>

      </article>
      <div className='contact_me'>
      
      <h2>
        <span>How</span>
        <span>To</span>
        <span>Contact </span>
        <span>Me</span>
      </h2>
      <p> 
        <span>E-mail : </span>
        <span>jiaeyamm33@gmail.com / jiaeyamm@naver.com</span>
      </p>
      <p> 
        <span>Git Hub : </span>
        <a href="https://github.com/jiaeyamm33" title='깃허브주소'>
        <span>https://github.com/jiaeyamm33</span>
        </a>
      </p>
      
  
      </div>
    </section>
  );
}

export default Process;




