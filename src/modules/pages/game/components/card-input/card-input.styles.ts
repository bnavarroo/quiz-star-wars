import styled from 'styled-components';

const Input = styled.input`
  box-sizing: border-box;
  margin: 10px auto;
  border: 1px solid #bbb;
  padding: 5px;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  outline: none;
  text-align: center;

  :disabled {
    opacity: 0.75;
    background: #eee;
  }
`;

export default Input;
