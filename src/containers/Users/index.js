import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import bag from '../../assets/bag.svg'
import Trash from '../../assets/trash.svg'
import axios from "axios";
import H1 from "../../components/Title"
import Button from "../../components/button";
import ContainerItens from "../../components/ContainerItens";
import ContainerMaior from "../../components/ContainerMaior";



import {
  Image,
  ContainerMenor,
  Div,
} from './styles';

function Orders() {
  const [Orders, setOrders] = useState([]);
  const history = useHistory()


  
  useEffect(() => {
    async function fetchUsers() {
      const { data: newClient } = await axios.get("http://localhost:3001/order")
      setOrders(newClient)
    }
    fetchUsers()
  }, []);

  async function deleteOrder(userId) {
    await axios.delete(`http://localhost:3001/order/${userId}`)
    const newOrder = Orders.filter(user => user.id !== userId)
    setOrders(newOrder)
  }

  function goBackPage(){
    history.push('/')
  }


  return (
    <ContainerMaior>
      <ContainerItens isAlign={true}>
        <Image alt="logo-burger" src={bag} />
        <H1 isMargin={true}>Pedidos</H1>
        <ul>
          {Orders.map((user) => (
            <ContainerMenor key={user.id}>
              <Div>
                <p>{user.order}</p>
                <p>{user.clientName}</p>
              </Div>
              <button onClick={() => deleteOrder(user.id)}>
                <img src={Trash} alt="lata de lixo" />
              </button>
            </ContainerMenor>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>Voltar</Button>

      </ContainerItens>    
    </ContainerMaior>
  );
}


export default Orders;