import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import { Button } from '../components/Buttons';
import Repository from "../core/Repository";
import Collection from "../backend/db/Collection";
import { useEffect, useState } from "react";
import useClients from "../hooks/useClients";

export default function Home() {

  const { client, clients, visibleTable, selectClient, deleteClient, newClient, saveClient, showTable  } = useClients()

  return (
    <Layout title="Cadastro">
      <div className="flex justify-end">
        <Button route={`/register/_`} text="Novo cliente" color="blue"/>
      </div>
      <Table clients={clients}></Table>
    </Layout>
  )
}
