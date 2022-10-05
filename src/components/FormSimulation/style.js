import styled from "styled-components";


export const StyledForm = styled.form`
width:50%;
display:flex;
flex-direction:column;
padding: 40px;
gap: 20px;

h2{
  margin: 0;
}

label{
  display: flex;
  flex-direction: column;
  font-size:10px;
  line-height:20px;
  font-weight:600;
}

input{
  height:20px;
 
}

button{
  cursor: pointer;
  background-color: transparent;
  font-size: 15px;
  :hover{
    background-color: #e2e2e2;
  }
}
`