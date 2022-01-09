import { useState, useEffect } from "react";
import Collection from "../backend/db/Collection";
import Client from "../core/Client";
import Repository from "../core/Repository";
import { Button } from "./Buttons";
import Input from "./Input";

interface PropsForm {
  client?: Client
  onclick?: () => void
  changeClient?: (client: Client) => void
}

export default function Form(props: PropsForm) {

  const initialClient = props.client ?? new Client("", 0, null, true) 
  const [client, setClient] = useState<Client>(initialClient)

  
  const idClient = client?.id
  

  const [name, setName] = useState(client.name ?? "")
  const [age, setAge] = useState(client.age ?? 0)
  const [editable, setEditable] = useState(client.editable)

  return(
    <div>
      {idClient ? (
        <Input label="Código" value={idClient} readOnly/>
      ): false}
      <Input label="Nome" value={name} change={setName}/>
      <Input label="Idade" value={age} type="number" change={setAge}/>
      <Input label="Editável" value={editable} type="checkbox" change={() => setEditable(!editable)}/>
      <div className="flex justify-end mt-7">
        <Button text={idClient ? "Alterar" : "Salvar"} color="green" onclick={() => props.changeClient?.(new Client(name, +age, idClient, editable))}/>
        <Button text="Cancelar" onclick={props.onclick}/>
      </div>
    </div>
  )
}