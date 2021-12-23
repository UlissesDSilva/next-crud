import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import { ButtonRegister } from '../components/Buttons';

export default function Home() {

  const clients = [
    new Client('Ulisses', 27, '1'),
    new Client('Mirella', 24, '2'),
    new Client('Dilu', 27, '3', false),
  ]

  return (
    <div className={`
      flex h-screen 
      justify-center 
      items-center 
      bg-gradient-to-r from-purple-500 to-blue-600
    `}
    >
      <Layout title="Cadastro">
        <div className="flex justify-end">
          <ButtonRegister/>
        </div>
        <Table clients={clients}></Table>
      </Layout>
    </div>
  )
}
