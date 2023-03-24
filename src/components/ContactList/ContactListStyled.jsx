import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
`;
export const Item = styled.li``;
export const Text = styled.p`
  color: white;
  font-size: 24px;
`;
export const Button = styled.button`
  background-color: #969595;
  border: none;
  border-radius: 12px;
  color: white;
  padding: 6px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: #b43f3fa1;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
