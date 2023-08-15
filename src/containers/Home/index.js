import React, { useState, useRef } from "react";
import { useHistory } from 'react-router-dom'
import burger from '../../assets/burger.svg'
import axios from "axios";
import H1 from "../../components/Title"
import Button from "../../components/button";
import ContainerItens from "../../components/ContainerItens";
import ContainerMaior from "../../components/ContainerMaior";

import {
  Image,
  InputLabel,
  Input,
} from './styles';

function App() {
  const [Orders, setOrders] = useState([]);
  const history = useHistory()
  const inputOrder = useRef()
  const inputClientName = useRef()


  async function addNewOrden() {

    const { data: newOrder } = await axios.post("http://localhost:3001/order",
      {
        order: inputOrder.current.value,
        clientName: inputClientName.current.value
      });
    setOrders([...Orders, newOrder]);
    history.push('/orders')
  }


  return (
    <ContainerMaior>
      <ContainerItens>
        <Image alt="logo-burger" src={burger} />
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClientName} placeholder="Steve Jobs" />

        <Button onClick={addNewOrden}>Novo Pedido</Button>
       

      </ContainerItens>
      
    </ContainerMaior>
  );
}


export default App;