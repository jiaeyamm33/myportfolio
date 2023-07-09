import React, { useState } from 'react';
import TeamProject from './TeamProject';
import PersonalProject from './PersonalProject';

function Portfolio(props) {
  const [tabChange, setTabChange] = useState(false);
  const [pageChange, setPageChange] = useState(0);
  const teamTab = [
    {
      num: 1,
      kind: 'Team Project',
      title: '브랜딩 사이트 반응형 웹 제작 (LUSH)',
      date: '2022. 12. 20 ~ 2023. 01. 19 (개발기간 12일)',
      role: 'PC, Mobile 반응형 웹 제작 회원가입, footer 제작 외 미디어쿼리, 전체 페이지 반응형 적용, CSS 최적화',
      oneS: '개발이 재밌다고 생각하게 된 계기, 앞으로 더 많은 프로젝트를 진행하고 싶다.',
      keyword: '#첫프로젝트 #웹접근성 #협업 #깃허브 #디버깅',
      link: 'https://jiaeyamm33.github.io/Comnoob_lush/',
      id:'test',
      pw:'1234'
    },
    {
      num: 2,
      kind: 'Team Project',
      title: '브랜딩 사이트 적응형 웹 제작 (이마트) ',
      date: '2023. 02. 07 ~ 2023. 03. 15 (개발기간 7일)',
      role: 'PC, Mobile 적응형 웹 제작, 기업소개 페이지 및 헤더 및 GNB 제작, DB 활용하여 회원가입, 입사지원 구현',
      oneS: 'JS와 Query를 활용한 동적 이벤트 구현, Map API 사용 등 역할 확대로 뿌듯하다.',
      keyword: '#적응형_웹 #이벤트 #사용자_UI #협업 #API #조장',
      link: 'http://jiaeyammas.dothome.co.kr/emart/index.html',
      id:'회원가입 가능',
      pw:'회원가입 가능'
    },
    {
      num: 3,
      kind: 'Team Project',
      title: 'LMS[학습지원시스템] 관리자 페이지 제작 (OFD STUDIO)',
      date: '2023. 03. 28 ~ 2023. 04. 18 (개발기간 7일)',
      role: 'back과 연동하여 회원정보, QNA 관련 전체 데이터 출력, 수정, 삭제 기능 및 활용 구현 + 강의관련 일부 데이터 활용',
      oneS: '데이터 연동을 고려한 구조 및 레이아웃 중요성과 데이터 활용의 재미를 느낌',
      keyword: '#DB_활용 #back_data협업 #관리자모드 #데이터연결',
      link: 'http://jiaeyammas.dothome.co.kr/revolution/login.php',
      id: 'admin',
      pw: '1234'
    },
    {
      num: 4,
      kind: 'Team Project',
      title: 'LMS[학습지원시스템] 사용자 페이지 제작 (OFD STUDIO)',
      date: '2023. 04. 27 ~ 2023. 05. 19 (개발기간 8일)',
      role: '회원정보, QNA 페이지 DB 활용하여 출력, 입력, 수정, 삭제 기능 구현',
      oneS: '리액트 활용 첫 프로젝트, 리액트 기초만 알고 시작해 아쉬움, 리액트에 대한 관심도 up',
      keyword: '#DB_활용 #사용자모드 #리액트_프로젝트',
      link: 'http://jamm.dothome.co.kr/revolution_user_d/index.html#/',
      id: 'stonemindol',
      pw: '12345'
    }
  ]
  const personalTab = [{
    num: 1,
    link: 'https://jiaeyamstodolist.netlify.app/',
    img: 'todolist.png',
    title: '[React Project] To-do-list',
    tool: 'VS code, Git, Netlify',
    function: ['1. 새로운 to-do-list 추가하기', '2. 체크박스 체크 시 Completed로 상태 변경', '3. 항목에 따른 필터 조회', '4. 삭제 버튼 클릭 시 항목 삭제', '5. 아이콘 클릭 시 다크 모드 구현'],
    useCode: 'useState, useEffect, useContext, Post_CSS',
    desc: 'local Storage와 hooks를 활용한 To Do list'
  }]
  return (
    <section className='portfolio'>
      <h2 className='port_title'>포트폴리오</h2>
      <article className='port_com'>
      
      {
      !tabChange ?  
      <TeamProject teamTab={teamTab} pageChange={pageChange} /> :
      <PersonalProject personalTab={personalTab} />
      }
      
      <nav className='tab'>
      <ul className='flex'>
      <li
      onClick={()=>{
        setTabChange(true);
        setPageChange(0);
      }}
      style={tabChange ? { position: 'relative', zIndex: 22, fontFamily: 's-bold' } : {}}
      >Personal</li>


      <li onClick={()=>{
        setTabChange(false);
        setPageChange(0);
       }}
       style={!tabChange ? { position: 'relative', zIndex: 22, fontFamily: 's-bold' } : {}}
       >Team</li>
      </ul>
      </nav>

      <nav className='p_index'>

      <ul>
      {(tabChange === false ? teamTab : personalTab).map((item) => (
      <li
      key={item.num}
      onClick={() => setPageChange(item.num - 1)}
      className={pageChange === item.num - 1 ? 'onli' : ''}
      >
      {item.num}
      </li>
      ))}
      </ul>

      </nav>
      </article>
    </section>
  );
}

export default Portfolio;