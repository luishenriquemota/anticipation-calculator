import { StyledForm } from "./style"
import { useEffect, useState, useCallback } from "react"
import { useCalculate } from "../../providers/Calculate"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import Input from "../input"


const FormSimulation = () => {

  const {setAnswer} = useCalculate();

 
  const schema = yup.object().shape({
    amount: yup.number().required("Insira um valor para a simulação."),
    installments: yup.number().required("Insira a quantidade de parcelas que deseja."),
    mdr: yup.number().required("Insira o valor da taxa."),
    days: yup.string()
  })

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })


    const submit = (data) => {
      let days = []

      if(data.days){
        days = data.days.split(",").map((item) => Number(item))
      }

      const noDays = {
        amount: data.amount,
        installments: data.installments,
        mdr: data.mdr,
      }

      const withDays = {
        amount: data.amount,
        installments: data.installments,
        mdr: data.mdr,
        days: days

      }

      const req = data.days ? withDays : noDays
      
      console.log(data)
      axios.post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", req)
      .then((res)=> {
        setAnswer(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }

    const [user, setUser] = useState({})

    const handleTeste = useCallback((e) => {
      // setUser({... user, e.target.value})
      // console.log(e.target.value)
      console.log(user)
    }, [user]);

  return(
    <StyledForm onSubmit={handleSubmit(submit)}>
        <h2>Simule sua Antecipação</h2>
        <label>Informe o valor da venda * 
          <input {...register("amount")}/>
        </label>
        <label>Em quantas parcelas * 
          <input {...register("installments")}/>
        </label>
        <label>Informe o percentual de MDR * 
          <input {...register("mdr")}/>
        </label>
        <label>Informar dias a serem calculados (opcional)
          <input {...register("days")}/>
        </label>
        <button onClick={() => console.log(user)}>Simular</button>
        <Input placeholder="ola" name="teste" onChange={handleTeste}/>
      </StyledForm>
  )
}
export default FormSimulation