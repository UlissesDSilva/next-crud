import { useState, useEffect } from "react";
import Collection from "../backend/db/Collection";
import Client from "../core/Client";
import Repository from "../core/Repository";
import { Button } from "./Buttons";
import Input from "./Input";

interface PropsForm {
  client?: Client
  idClient?: string 
}

export default function Form(props: PropsForm) {

  const repo: Repository = new Collection()

  const id = props.idClient
  const [client, setClient] = useState<Client>()
  
  useEffect(() => {
    repo.getClient(id)
    .then(setClient)
  }, [client])
  
  
  const idClient = client.getEditable

  const [name, setName] = useState(client.getName ?? "")
  const [age, setAge] = useState(client.getAge ?? 0)
  const [editable, setEditable] = useState(false)

  return(
    <div>
      {idClient ? (
        <Input label="Código" value={idClient} readOnly/>
      ): false}
      <Input label="Nome" value={name} change={setName}/>
      <Input label="Idade" value={age} type="number" change={setAge}/>
      <Input label="Editável" value={editable} type="checkbox" change={() => setEditable(!editable)}/>
      <div className="flex justify-end mt-7">
        <Button route="/" text={idClient ? "Alterar" : "Salvar"} color="green" id={id} client={client}/>
        <Button route="/" text="Cancelar" />
      </div>
    </div>
  )
}