import { useState } from "react";
import { IAgent } from "../src/interfaces";
import InputSearch from "./InputSearch";

const AgentsList = () => {
  const [agents,setAgents] = useState<IAgent[]>([
    {
      "agent_id": 1,
      "name": "Kai Cunha Lima",
      "image": "https://picsum.photos/200",
      "department": "Administrativo",
      "branch": "Farmácia Pedido Pago",
      "role": "Diretor",
      "status": "active"
    },
    {
      "agent_id": 2,
      "name": "Kaua Gomes Castro",
      "image": "https://picsum.photos/200",
      "department": "Administrativo",
      "branch": "Farmácia Pedido Pago",
      "role": "Gerente",
      "status": "inactive"
    },
    {
      "agent_id": 3,
      "name": "Brenda Cunha Pinto",
      "image": "https://picsum.photos/200",
      "department": "Comercial",
      "branch": "Farmácia Pedido Pago",
      "role": "Analista",
      "status": "active"
    },
    {
      "agent_id": 4,
      "name": "Rodrigo Correia Ferreira",
      "image": "https://picsum.photos/200",
      "department": "Administrativo",
      "branch": "Farmácia Pedido Pago",
      "role": "Analista",
      "status": "active"
    },
    {
      "agent_id": 5,
      "name": "Livia Goncalves Dias",
      "image": "https://picsum.photos/200",
      "department": "Suporte",
      "branch": "Farmácia Pedido Pago",
      "role": "Diretor",
      "status": "active"
    },
    {
      "agent_id": 6,
      "name": "Larissa Araujo Pereira",
      "image": "https://picsum.photos/200",
      "department": "Marketing",
      "branch": "Farmácia Pedido Pago",
      "role": "Analista",
      "status": "active"
    },
    {
      "agent_id": 7,
      "name": "Camila Rodrigues Ribeiro",
      "image": "https://picsum.photos/200",
      "department": "SAC",
      "branch": "Farmácia Pedido Pago",
      "role": "Diretor",
      "status": "active"
    },
    {
      "agent_id": 8,
      "name": "Fernanda Barbosa Almeida",
      "image": "https://picsum.photos/200",
      "department": "Marketing",
      "branch": "Farmácia Pedido Pago",
      "role": "Diretor",
      "status": "active"
    },
    {
      "agent_id": 9,
      "name": "Luiza Cunha Araujo",
      "image": "https://picsum.photos/200",
      "department": "SAC",
      "branch": "Farmácia Pedido Pago",
      "role": "Analista",
      "status": "inactive"
    }
  ])

  return (
    <div>
      <InputSearch  data={[]} setData={} paramToBeFiltered={} labelText={} placeholder={} />
    </div>
  )
}

export default AgentsList;