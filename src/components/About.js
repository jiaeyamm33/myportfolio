import React from 'react';

function About(props) {
  const myCharacters = [
    {
      id: 1,
      keyWordE: 'Challenging',
      keyWordK: '도전적인',
      imgSrc: '1.png'
    }, 
    {
      id: 2,
      keyWordE: 'Energetic',
      keyWordK: '활동적인',
      imgSrc: '2.png'
    }, 
    {
      id: 3,
      keyWordE: 'Propulsive',
      keyWordK: '추진력 있는',
      imgSrc: '3.png'
    }, 
    {
      id: 4,
      keyWordE: 'Curious',
      keyWordK: '호기심 많은',
      imgSrc: '4.png'
    }, 
  ]

  const Characterlist = myCharacters.map((introduce)=> <li key={introduce.id}>
  <div>
    <div className='intro_img'style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/images/intro' + introduce.imgSrc})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat' }
  } ></div>
    <div className='keybox'>
    <p className='keyword'><span>{introduce.keyWordE}</span></p>
    <p>{introduce.keyWordK}</p>
    </div>
  </div></li>)
  return (
    <section className='about'>
      <h2 className='hidden'>자기 소개</h2>
      <article className='flex title'>
      <h2>
        <span>Who</span>
        <span>I</span>
        <span>am</span>
        <span>?</span>
      </h2>

      <div className='about_me'>
        <h3>
          <span>summary_</span>
          새로움이 두렵지 않은 사람!
        </h3>
        <p>안녕하세요. 신입 개발자 명지애입니다. 궁금한 것도, 하고 싶은 것도, 배우고 싶은 것도 많은 저는<br/>
        하고 싶은 것이 있으면 꼭 하고 마는 성미를 가졌습니다. <br/>비전공자이며, 타 직무에 종사하던 제가 코딩에 입문한 것도 <br />
        새로운 도전이었습니다. 적응력 만렙, 센스 만렙. 저와 함께 일하고 싶지 않으신가요?! </p>
      </div>
    </article>

    <article>
    <ul className='flex my_charac'>
      {Characterlist}
    </ul>
    </article>

    <article className='skill_list'>
      <div className='flex'>
      <h2>
        <span>My</span>
        <span>sk</span>
        <span>ill</span>
        <span>s</span>
      </h2>

      <div className='about_me skill'>
        <h3>
          <span>summary_</span>
          All about Front-end!
        </h3>
        <p>협업에 특화된 프론트엔드 개발자가 되기 위하여 여러 지식을 함양하였습니다!</p>
      </div>
      </div>

      <div className='skills'>
        <ul className='flex'>
          <li>
          <img src={`${process.env.PUBLIC_URL}/images/html.png`} alt="html" ></img>
          </li>
          <li>
          <img src={`${process.env.PUBLIC_URL}/images/css.png`} alt="css" ></img>
          </li>
          <li>
          <img src={`${process.env.PUBLIC_URL}/images/javascript.png`} alt="js" ></img>
          </li>
          <li>
          <img src={`${process.env.PUBLIC_URL}/images/react.png`} alt="js" ></img>
          </li>
          <li>
          <img src={`${process.env.PUBLIC_URL}/images/php.png`} alt="php" ></img>
          </li>
          <li>
          <img src={`${process.env.PUBLIC_URL}/images/figma.png`} alt="figma" ></img>
          </li>
          <li>
          <img src={`${process.env.PUBLIC_URL}/images/git.png`} alt="git" ></img>
          </li>
          <li>
          <img src={`${process.env.PUBLIC_URL}/images/github.png`} alt="github" ></img>
          </li>
          <li>
          <img src={`${process.env.PUBLIC_URL}/images/heart.png`} alt="heart" ></img>
          </li>
        </ul>
      </div>
    </article>
    </section>
  );
}

export default About;