import { StyledForm } from "./style"
import { useCalculate } from "../../providers/Calculate"
import axios from "axios"
import { useState } from "react"
import { NumericFormat } from "react-number-format"


const FormSimulation = () => {

  const {setAnswer} = useCalculate();
  const [user, setUser] = useState({})

  const submitTeste = (e) => {
    e.preventDefault()
    let days = []

    const str1 = user.amount.replace(/\D/g, '')

    
    if(user.days){
      days = user.days.split("-").map((item) => Number(item))
    }
    
    const noDays = {
      amount: Number(str1.substring(0, str1.length -2)),
      installments: user.installments,
      mdr: user.mdr
    }

    const withDays = {
      amount: Number(str1.substring(0, str1.length -2)),
      installments: user.installments,
      mdr: user.mdr,
      days: days
    }

    const req = user.days ? withDays : noDays

    axios.post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", req)
    .then((res)=> {
      setAnswer(res.data)
      setUser({...user})
    })
    .catch((err) => {
      console.log(err)
    })
  }
    
  return(
    <StyledForm onSubmit={(e) => submitTeste(e)}>
        <h2>Simule sua Antecipação</h2>
        <label>Informe o valor da venda * 
          <NumericFormat
           required={true}
           prefix={"R$ "} 
           thousandSeparator={"."} 
           decimalSeparator={","} 
           decimalScale={2} 
           fixedDecimalScale={true}
           onChange={(e) => setUser({...user, "amount": e.target.value})}
          />
        </label>
        <label>Em quantas parcelas * 
          <input required onChange={(e) => setUser({...user, "installments": e.target.value})}/>
        </label>
        <label>Informe o percentual de MDR * 
          <input required onChange={(e) => setUser({...user, "mdr": e.target.value})}/>
        </label>
        <label>Informar dias a serem calculados (opcional)
          <input placeholder="Ex: 10-30-40" onChange={(e) => setUser({...user, "days": e.target.value})}/>
        </label>
        <button type="submit">Simular</button>
      </StyledForm>
  )
}
export default FormSimulation