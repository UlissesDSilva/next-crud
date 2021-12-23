import Client from '../core/Client'
import Link from 'next/link';
import { IconDelete, IconEdit } from './Icons'

interface ButtonProps{
  id?: string
  client?: Client
  icon?: string
  text?: string
  route?: string
}

function editClient (client?: Client) {
  console.log(client)  
}

function deleteClient (client?: Client) {
  console.log(`Excluindo ${client}`)
}

export const ButtonEdit = (props: ButtonProps) => {
  return(
    <button 
      className={`flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-1 m-1`}
      onClick={() => editClient(props.client)}
    >
      {IconEdit}
    </button>
  )
}

export const ButtonDelete = (props: ButtonProps) => {
  return(
    <button 
      className={`flex justify-center items-center text-red-500 rounded-full hover:bg-purple-50 p-1 m-1`}
      onClick={() => deleteClient(props.client)}
    >
      {IconDelete}
    </button>
  )
}

export const ButtonRegister = (props: ButtonProps) => {
  return(
    <Link href={props.route}>
      <button
        className={`
          bg-gradient-to-r from-blue-400 to-blue-700
          text-white 
          px-4 py-2 
          rounded-md
          mb-4
        `}
      >
        {props.text}
      </button>
    </Link>
  )
}