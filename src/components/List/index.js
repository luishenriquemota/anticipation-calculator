import { ListStyled } from "./style"
import { useCalculate } from "../../providers/Calculate"

const AmountReceivable = () => {

const {answer} = useCalculate()

  return(
    <ListStyled>
      <h3 >Voce Receberá:</h3>
      <ul>
        {Object.keys(answer).map((item, index) => 
          <li key={index}>
            {item == 1 ? 
            "Amanhã"
            :
            `Em ${item} dias`}: R$ {answer[item].toLocaleString("pt-BR")+",00"}
          </li>
        )}
      </ul>
    </ListStyled>
  )
}
export default AmountReceivable