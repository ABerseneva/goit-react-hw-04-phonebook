import styled from 'styled-components';

export const Form = styled.form``;

export const Button = styled.button`
  background-color: #969595;
  border: none;
  border-radius: 12px;
  color: white;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: #43b43fa2;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const Input = styled.input`
  border: 0;
  border-radius: 15px;
  box-shadow: 0px 2px 6px rgba(255, 255, 255, 0.418);
  padding: 5px;
  margin-left: 10px;
`;

export const Label = styled.label`
  color: white;
  margin: 5px;
`;

export const WrapBtn = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;
