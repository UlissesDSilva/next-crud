import Layout from "../components/Layout";
import Table from "../components/Table";
import { Button } from '../components/Buttons';
import { useEffect } from "react";
import useClients from "../hooks/useClients";
import Form from "../components/Form2";

export default function Home() {

  const { 
    client,
    clients,
    view,
    changeViewTable,
    getAllClients,
    selectionClient,
    deleteClient,
    saveClient,
    newClient  
  } = useClients()

  useEffect(getAllClients, [])

  return (
    <Layout title="Cadastro">
      <div className="flex justify-end">
        {view === "table" ? <Button text="Novo cliente" color="blue" onclick={newClient}/> : false}
        
      </div>
      { view === 'table' ?  
          <Table clients={clients} selectionClient={selectionClient} deleteClient={deleteClient}></Table> : 
          <Form onclick={changeViewTable} changeClient={saveClient} client={client}/>
      }
      
    </Layout>
  )
}
