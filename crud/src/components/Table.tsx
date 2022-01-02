import Client from "../core/Client";
import { ButtonIcon } from './Buttons'
import { IconDelete, IconEdit  } from './Icons'

interface TableProps {
  clients: Client[],
}

export default function Table(props: TableProps) {


  const renderRows = (mapClients) => {
    return mapClients?.map((client, index) => {
      const showActions = client.editable
      return(
        <tr key={client.id}
            className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td className="text-left p-2">{client.id}</td>
          <td className="text-left p-2">{client.name}</td>
          <td className="text-left p-2">{client.age}</td>
          {showActions ? 
            <td className="flex justify-center items-center">
              {client.editable ? <ButtonIcon id={client.id}  icon={IconEdit} color="green"/> : false}
              {client.editable ? <ButtonIcon id={client.id} icon={IconDelete} color="red"/> : false}
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