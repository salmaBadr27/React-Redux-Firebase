import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import InputField from "../Input";
import FormButton from "../Button";

const MyForm = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 2rem;
`;
const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: cursive;
  width: 100%;
`;
const Logo = styled.div`
  font-family: "museo-slab";
  font-size: 30px;
  text-align: center;
  padding: 20px 20px 0;
  margin: 0;
  color: #fff;
`;

const Form = props => (
  <FormLogin id={props.id} onSubmit={props.onSubmit} name={props.name}>
    {props.title && <Logo>{props.title}</Logo>}
    <br />
    {props.fields.map(e => {
      return (
        <MyForm key={e.id}>
          <InputField {...e} />
        </MyForm>
      );
    })}
    <div>
      {props.id === "login" ? (
        <div>
          <div>
            Teacher : <input type="radio" value="teacher" name="selectType" />
          </div>
          <div>
            Student : <input type="radio" value="student" name="selectType" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
    <FormButton>{props.label}</FormButton>
    <br />
  </FormLogin>
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
