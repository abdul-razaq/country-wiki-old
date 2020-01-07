import React from 'react';
import ReactDOM from 'react-dom';


const Modal = () => {

  return ReactDOM.createPortal(
    <Modal onClick={onDismiss}>
      <div onClick={ e => e.stopPropagation() }>
        <Header>Country Encyclopedia</Header>
        <Content>
          This was created me.
        </Content>
      </div>
    </Modal>
    ,
    document.querySelector("#modal")
  )
}