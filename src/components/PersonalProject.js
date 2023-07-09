import React from 'react';

function PersonalProject(props) {
  return (
  <div>
  {props.personalTab.map((item, index)=> {
  return (
    <div key={index} className='per_wrap'>
    <div className='p_title flex'>
    <span>
    {item.num}
    </span>
    <p>
    {item.title}
    </p>
    </div>
    <div className='flex p_explain'>
      <div className='frame'>
      <iframe src={item.link} title={item.title} frameborder="0"></iframe>
      <div className='flex p_link'>
      <p>{item.desc}</p>
      <a href={item.link} title='페이지 이동하기'>페이지 이동하기</a>
      </div>
      </div>
      
      <div className='p_desc flex'>
        
        <div>
        <p className='bold'>[ 개발 및 배포 도구 ]</p>
        <p>
          {item.tool}
        </p>
        </div>

        <div className='function'>
        <p className='bold'>[ 구현 기능 ]</p>
        <ul>
        {item.function.map((func, idx) => (
        <li key={idx}>{func}</li>
        ))}
        </ul>
        </div>

        <div>
        <p className='bold'>[ Hooks & style ]</p>
        <p>
        {item.useCode}
        </p>

        </div>

      </div>
    </div>
    </div>
    )
    })}
    </div>
  );
}

export default PersonalProject;