import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '10rem 20rem',
    transform: 'translate(-50%, -50%)',
  },
};

const styles = {
  textDecoration: 'none',
  color: 'inherit',
}

Modal.setAppElement('#modal');

const AboutModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h3 onClick={openModal}>
        <FontAwesomeIcon icon={faInfoCircle} /> About
      </h3>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="About"
      >
        <h2 style={{fontFamily: 'inherit', fontWeight: '300', textAlign: 'center', marginTop: '-5rem'}}>About</h2>
        <span onClick={closeModal} style={{position: 'absolute', top: '10%', right: '10%', cursor: 'pointer', fontSize: '3rem'}}>&times;</span>
        <div>App created by AbdulRazaq <a style={styles} href="https://github.com/abdul-razaq" target="_blank">github</a> <a style={styles} href="https://twitter.com/ant1g3n" target="_blank">twitter</a> </div>
      </Modal>
    </div>
  );
};

export default AboutModal;
