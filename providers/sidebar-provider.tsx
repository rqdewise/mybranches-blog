import React from 'react'

import SidebarNav from '@/components/sidebar-nav'
import { cn } from '@/lib/utils'

type SidebarNavProps = {
  className: string;
}
const SidebarProvider: React.FC<SidebarNavProps> = ({
  className
}) => {
    const [isMounted, setIsMounted]= React.useState(false)

    React.useEffect(()=>{
      setIsMounted(true)
    }, [])
  
    if(!isMounted){
      return null;
    }
  
  return (
    <div className={cn(" ", className)}>
        <SidebarNav className=" "/>
    </div>
  )
}

export default SidebarProvider