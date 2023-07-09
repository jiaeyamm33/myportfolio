import { useState } from "react";
import React from 'react';

function TeamProject(props) {
  const [imgChange, setImgChange] = useState(1);
    const bgImgStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };

  const bgImgSet = (item) => {
    return {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/' + item.num + '_' + imgChange + '.png'})`,
    };
  };

  return (
        <div>
          {props.teamTab.map((item, index) => {
            if (props.pageChange === item.num - 1) {
              return (
                <div key={index}>
                  <h2>
                    <span>{item.num}</span>
                    <span className='kind'>Team Project</span>
                    <span className='title'>{item.title}</span>
                  </h2>

                  <div className='pcont_wrap'>
                    <div className='flex'>
                      <div className='photo_wrap'>
                        <div className='photo_box' style={bgImgSet(item)}></div>
                        <div className='flex date_link'>
                          <p>{item.date}</p>
                          <a href={item.link} title={item.title}>페이지 보러가기</a>
                        </div>
                        <p className='role'>{item.role}</p>
                      </div>

                      <div className='photo_list'>
                        {[2, 3, 4, 5, 6].map((num) => (
                          <div
                            key={num}
                            style={{
                              ...bgImgStyle,
                              backgroundImage: `url(${process.env.PUBLIC_URL + '/images/' + item.num + '_' + num + '.png'})`
                            }}
                            onMouseOver={() => setImgChange(num)}
                            onMouseLeave={() => setImgChange(1)}
                          ></div>
                        ))}
                      </div>
                    </div>

                    <div className='flex review'>
                      <p className="first">한 줄 평</p>
                      <p className="last">{item.oneS}</p>
                      <div className='keyword'>
                        <span>keyword</span>
                        <p>{item.keyword}</p>
                      </div>
                    </div>

                    <div className="user">
                      <p>ID: {item.id}</p>
                      <p>PW: {item.pw}</p>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
  );
}

export default TeamProject;