import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const ourStyle = css`
  border: 0;
  color: inherit;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
  width: 100%;
  border-radius: 0.25rem;
  padding: 1rem;
  color: #3a3f44;
  background-color: #ffffff;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`;

const StyledInput = styled.input`
  ${ourStyle};
`;

const Input = props => <StyledInput {...props} />;

export default Input;
Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
