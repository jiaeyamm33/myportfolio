import React, {useState, useEffect} from 'react';

function Main(props) {
  const txt1 = '안녕하세요! 반갑습니다. \n 프론트엔드 개발자를 희망하는 명지애입니다. \n 제 포트폴리오 사이트에 오신 걸 환영합니다.';
  const [ typing, setTyping ] = useState('');
  const [ count, setCount ] = useState(0);
  
  useEffect(()=> {
    const interval = setInterval(()=> {
      setTyping(typing + txt1[count]);
      setCount(count+1); 
    }, 100);
    if(count === txt1.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
   },)

  return (
  <section className="sky">
          <airplane className={ props.thema !== 2 ? 'airplane' :'airplane2' }>
            <div className={ props.thema !== 2 ? 'head' :'head2' }></div>
            <div className={ props.thema !== 2 ? 'body' :'body2' }>
              <div className={ props.thema !== 2 ? 'window' :'window2' }></div>
              <div className={ props.thema !== 2 ? 'window' :'window2' }></div>
              <div className={ props.thema !== 2 ? 'window' :'window2' }></div>
            </div>
            <div className={ props.thema !== 2 ? 'lwing' :'lwing2' }></div>
            <div className={ props.thema !== 2 ? 'rwing' :'rwing2' }></div>
            <div className={ props.thema !== 2 ? 'tale' :'tale2' }></div>
          </airplane>
          
          <div className="cloud x1"></div>
          <div className="cloud x2"></div>
          <div className="cloud x3"></div>
          <div className="cloud x5"></div>
          <div className="cloud x6"></div>
          <div className="cloud x7"></div>
          <div className="cloud2 x8"></div>
          <div className="cloud2 x9"></div>
          <div className="cloud2 x10"></div>
          <div className="cloud2 x11"></div>
          <div className="cloud2 x12"></div>
          <div className="cloud2 x13"></div>
          <div className="cloud2 x14"></div>


  <div className='main_title'>
    <div>
    <span className={ props.thema === 2 ? 'white' :'' }>Hello </span>
    <span>W</span>
    <span>o</span>
    <span>r</span>
    <span>l</span>
    <span>d</span>
    </div>
  </div>

  <div className='tiping_wrap'>
    <div className='tiping_top flex'>
      <div></div>
      <div></div>
      <div></div>
      <div className='tiping_title'>My Portfolio 2023 jiae-AI</div>
    </div>

    <div className='tiping_bottom'>
    <p>{typing}</p>
    </div>
  </div>
  </section>
  );
}

export default Main;