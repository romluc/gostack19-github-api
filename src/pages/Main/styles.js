import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #00688b;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  & + li {
    border-top: 1px solid #eee;
  }

  li:last-child {
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
  }

  a {
    color: #008b8b;
    text-decoration: none;
  }
`;

export const ClearButton = styled.button`
  background: #00688b;
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
  height: 40px;
  box-shadow: 3px 3px 5px #777;
`;

export const ClearButtonText = styled.text`
  color: #fff;
  font-weight: bold;
`;
