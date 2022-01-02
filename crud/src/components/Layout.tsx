// Refatorar usando styled component

import Title from "./Title";

interface LayoutProps {
  title: string,
  children?: any
}

export default function Layout(props: LayoutProps) {
  return(
    <div className={
      ` flex h-screen 
        justify-center 
        items-center 
        bg-gradient-to-r from-purple-500 to-blue-600
      `
    }
    
    >
      <div className={`
          flex flex-col w-2/3
          bg-white text-gray-800
          rounded-md
        `}
      >
        <Title>{props.title}</Title> 
        <div className="p-6">{props.children}</div>
      </div>
    </div>
  )
}