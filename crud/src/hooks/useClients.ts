import { useEffect, useState } from "react";
import Collection from "../backend/db/Collection";
import Client from "../core/Client";
import Repository from "../core/Repository";
import useShow from "./useShow2";

export default function useClients() {
  const repo: Repository = new Collection

  const { view, changeViewForm, changeViewTable } = useShow()

  const [clients, setClients] = useState<Client[]>([])
  const [client, setClient] = useState<Client>(Client.emptyClient())

  function getAllClients() {
    repo.getAll()
      .then(clients => {
        setClients(clients)
        changeViewTable()
      })

  }

  function selectionClient(client: Client) {
    setClient(client)
    changeViewForm()
  }

  async function deleteClient(client: Client) {
    await repo.delete(client)
    getAllClients()
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAllClients()
  }

  function newClient() {
    setClient(Client.emptyClient())
    changeViewForm()
  }

  return{
    getAllClients,
    newClient,
    saveClient,
    deleteClient,
    selectionClient,
    changeViewForm,
    changeViewTable,
    view,
    client,
    clients,
  }
}