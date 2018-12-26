import React from "react";
import { Button } from "react-bulma-components/full";
import PropTypes from "prop-types";

const FormButton = props => (
  <Button color="danger" size="medium" rounded>
    {props.children}
  </Button>
);
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};
Button.defaultvalue = {
  alignButton: false
};
export default FormButton;
