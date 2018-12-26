import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";


const ourStyle = css`
  border-radius: 5px;
  padding: 10px 5px;
  margin-top: 3px;
  margin-bottom: 3px;
`;

const StyledInput = styled.input`
  ${ourStyle};
`;



const Input = props =>
   <StyledInput {...props} />;

export default Input;
Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
