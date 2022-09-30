import FormSimulation from "../components/FormSimulation"
import AmountReceivable from "../components/List"
import { StyledHome } from "./style"



const Home = () => {

  return(
    <StyledHome>
      <FormSimulation/>
      <AmountReceivable/>
    </StyledHome>
  )
}
export default Home