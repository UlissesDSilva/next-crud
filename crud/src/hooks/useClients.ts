import { useEffect, useState } from "react";
import Collection from "../backend/db/Collection";
import Client from "../core/Client";
import Repository from "../core/Repository";
import useShow from "./useShow";

export default function useClients() {
  const repo: Repository = new Collection

  const { visibleForm, visibleTable, showForm, showTable } = useShow()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  

  useEffect(getAll, [])

  function getAll(){
    repo.getAll().then(clients =>{
      setClients(clients)
      showTable()
    })
  }

  function selectClient(client: Client) {
    setClient(client)
    showForm()
  }

  async function deleteClient(client: Client) {
    await repo.delete(client)
    getAll()
  }

  function newClient() {
    setClient(Client.empty())
    showForm()
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAll()
  }

  return{
    newClient,
    saveClient,
    deleteClient,
    selectClient,
    getAll,
    showTable,
    client,
    clients,
    visibleForm,
    visibleTable
  }
}