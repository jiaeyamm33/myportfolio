import React from 'react';
import PortfolioPart from './PortfolioPart';

function Portfolio(props) {
  return (
    <section className='portfolio'>
      <h2 className='port_title'>포트폴리오</h2>
      <PortfolioPart />
    </section>
  );
}

export default Portfolio;