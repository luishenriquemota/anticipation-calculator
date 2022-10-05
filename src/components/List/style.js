import styled from "styled-components";

export const ListStyled = styled.div`
width: 35%;
display: flex;
flex-direction: column;
gap: 15px;
background-color: #e2e2e2;
padding: 30px;
border-radius: 0 5px 5px 0;

h3{
  margin:20px 0 5px 0;
  border-bottom: 1px solid #0e45a3;
  color: #0e45a3;
}

ul{
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;

}

li{
  font-size: 14px;
  color: #1253c2;
}

`