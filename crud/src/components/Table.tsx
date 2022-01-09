import Client from "../core/Client";
import { ButtonAction } from './Buttons'
import { IconDelete, IconEdit  } from './Icons'

interface TableProps {
  clients: Client[]
  selectionClient?: (client: Client) => void
  deleteClient?: (client: Client) => void
}

export default function Table(props: TableProps) {


  const renderRows = (mapClients) => {
    return mapClients?.map((client, index) => {
      const showActions = client.editable
      console.log(showActions)
      return(
        <tr key={client.id}
            className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td className="text-left p-2">{client.id}</td>
          <td className="text-left p-2">{client.name}</td>
          <td className="text-left p-2">{client.age}</td>
          {showActions ? 
            <td className="flex justify-center items-center">
              {showActions ? <ButtonAction client={client} icon={IconEdit} color="green" actionClient={props.selectionClient}/> : false}
              {showActions ? <ButtonAction client={client} icon={IconDelete} color="red" actionClient={props.deleteClient}/> : false}
            </td> : <td className="flex justify-center items-center"></td>       
          }
        </tr>
      )
    })
  }

  return(
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
        <tr>
          <th className="text-left p-2">Código</th>
          <th className="text-left p-2">Nome</th>
          <th className="text-left p-2">Idade</th>
          <th className="text-center p-2">Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows(props.clients)}
      </tbody>
    </table>
  )
}