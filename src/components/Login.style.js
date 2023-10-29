import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
`;

export const LoginForm = styled.form`

  width: 90%;
  max-width: 400px;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  
  
  @media (min-width: 768px) {
    width: 60%;
  }
  
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
    @media (min-width: 768px) {
    width: 100%;
  }
  
  @media (min-width: 1024px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: red;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
    @media (min-width:768px) {
    width: 100%;
  }
  
  @media (min-width: 1024px) {
    width: 100%;
  }
`;