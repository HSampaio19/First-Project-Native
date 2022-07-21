
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  padding:30px;
  justify-content: center;
  align-items:center;
`;

export const Form =styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const SubmitButton = styled.Button`
justify-content: center;
align-items: center;
background: #7159c1;
border-radius: 4px;
margin-left: 10px;
padding: 0 12px;
height: 40px;
width: 40px;
`;

export const Input =styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
flex: 1;
background: #eee;
height: 40px;
border-radius: 4px;
padding: 0 15px;
border:1px solid #eee;
`;


