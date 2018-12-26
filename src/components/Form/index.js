import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import InputField from "../Input";
import FormButton from "../Button";
import { Heading } from "react-bulma-components/full";

const MyForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: cursive;
  width: 100%;
`;
const Form = props => (
  <form id={props.id} onSubmit={props.onSubmit} name={props.name}>
    {props.title && <Heading>{props.title}</Heading>}
    {props.fields.map(e => {
      return (
        <MyForm key={e.id}>
          <label>{e.label}</label>
          <InputField {...e} />
        </MyForm>
      );
    })}
    {props.id === "signup" ? (
      <div>
        <label className="subtitle">Teacher</label>
        <input type="radio" value="teacher" name="selectType" />
        <br />
        <label className="subtitle">Student</label>
        <input type="radio" value="student" name="selectType" />
      </div>
    ) : (
      ""
    )}
    <FormButton>{props.label}</FormButton>
  </form>
);
Form.propType = {
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node
};
Form.defaultProps = {
  fields: []
};
export default Form;
