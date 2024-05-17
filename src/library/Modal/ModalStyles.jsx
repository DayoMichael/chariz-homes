import { styled } from "styled-components";

export const ModalStyles = styled.div`
    /* The Modal (background) */
.modal {
  display: flex; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 100000000; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(14, 23, 46, 0.50); /* Fallback color */
  background-color: rgba(14, 23, 46, 0.50); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #ffff;
  margin: auto;
  border: 1px solid #D9D9D9;
  width: 80%;
  max-width: 96%;
  border-radius: 8px;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
`