import { useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import React, { useRef } from 'react';
import QR from './sub_src/QR';
import TEST from './sub_src/TEST';
import DataInput from './sub_src/Data_input';


export default function App() {
  const [currentPage, setCurrentPage] = useState('QRPage');
  const nodeRef = useRef(null);



  const getPageComponent = (page: string) => {
    switch (page) {
      case 'QRPage':
        return <QR setCurrentPage={setCurrentPage}/>;
      case 'DataPage':
        return <DataInput setCurrentPage={setCurrentPage}/>;
      default:
        return <TEST />;
    }
  };

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={currentPage}
        timeout={{ enter: 500, exit: 300 }}
        classNames="fade"
        nodeRef={nodeRef}
        unmountOnExit
      >
        <div ref={nodeRef} className="page">
          {getPageComponent(currentPage)}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}


