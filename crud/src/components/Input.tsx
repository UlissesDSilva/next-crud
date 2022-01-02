interface PropsInput {
  type?: 'text' | 'number' | 'checkbox'
  label: string
  value: any
  readOnly?: boolean
  change?: (value: any) => void
}

export default function Input(props: PropsInput) {
  
  return(
    <div className={
      `
         flex flex-col
         mb-2
      `
    }>
      <label htmlFor="" className="mb-4">{props.label}</label>
      <input 
        className={
          `
            px-4 py2
            border border-purple-500 
            bg-gray-100 
            rounded-lg 
            focus:outline-none 
            ${props.readOnly ? '' : 'focus:bg-white'}
          `
        }
        type={props.type ?? 'text'} 
        value={props.value}
        readOnly={props.readOnly}
        onChange={e => props.change?.(e.target.value)}
      />
    </div>
  )
}

