import PropTypes from "prop-types";
import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import { motion } from "framer-motion";


const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: opacity 0.3s;
  ${({ isOpen }) =>
    isOpen
      ? css`
          pointer-events: all;
          opacity: 1;
        `
      : css`
          pointer-events: none;
          opacity: 0;
        `}
`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && <LockScroll />}
      <ModalWrapper
        isOpen={isOpen}
        onClick={(e) => {
          const isSafeArea = e.target.closest('[data-modal-safe-area="true"]');
          if (!isSafeArea) {
            onClose();
          }
        }}
      >
        <motion.div
          style={{ position: "relative", display: "flex", flex: 1 }}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, x: 0 },
            closed: { opacity: 0, x: "100%" },
          }}
          transition={{ duration: 0.5 }}
        >
          {children &&
            children({
              "data-modal-safe-area": "true",
            })}
        </motion.div>
      </ModalWrapper>
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
