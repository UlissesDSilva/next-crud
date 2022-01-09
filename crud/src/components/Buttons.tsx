import Link from 'next/link';
import Collection from '../backend/db/Collection';
import Client from '../core/Client';
import Repository from '../core/Repository';

interface ButtonProps{
  text?: string
  color?: string
  onclick?: () => void
}

interface ButtonActionsProps{
  icon?: any
  color?: string
  client?: Client
  actionClient?: (client: Client) => void
}

// export const ButtonIcon = (props: ButtonProps) => {
//   const id = props.id

//   return(
//     <Link href={`/register/${id}`}>
//       <button className={`flex justify-center items-center text-${props.color}-600 rounded-full hover:bg-purple-50 p-1 m-1`}>
//         {props.icon}
//       </button>   
//     </Link>
//   )
// }

export const ButtonAction = (props: ButtonActionsProps) => {
  return(
    <button className={`flex justify-center items-center text-${props.color}-600 rounded-full hover:bg-purple-50 p-1 m-1`}
      onClick={() => props.actionClient?.(props.client)}
    >
      {props.icon}
    </button>   
    
  )
}

const repo: Repository = new Collection()

function save(client: Client) {
  repo.save(client)
}

export const Button = (props: ButtonProps) => {

  const color = props.color ?? "gray"
  return(
    <button
      className={`
        bg-gradient-to-r from-${color}-400 to-${color}-700
        text-white 
        px-4 py-2 
        rounded-md
        mb-4
        mr-2
      `}

      onClick={() => props.onclick()}
    >
      {props.text}
    </button>
  )
}