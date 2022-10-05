import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body, html{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: "roboto"
}


.App{
  height: 100vh;
  width: 100vw;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #002b76;
  background-image: -webkit-linear-gradient(180deg, #002b76 0%, #595959 100%);
  background-image: -moz-linear-gradient(180deg, #002b76 0%, #595959 100%);
  background-image: -o-linear-gradient(180deg, #002b76 0%, #595959 100%);
  background-image: linear-gradient(180deg, #002b76 0%, #595959 100%);

}

`
export default GlobalStyle