'use client'

import { ComponentCard } from '@/components/component-card'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { TreeNode } from '@/utils/build-tree'
import { useState } from 'react'

export default function HomePage() {
  const [energySensorFilter, setEnergySensorFilter] = useState(false)
  const [criticalSensorFilter, setCriticalSensorFilter] = useState(false)

  const [component, setComponent] = useState<TreeNode>({
    id: '',
    name: '',
    children: [],
  })

  console.log(component)

  return (
    <div className="flex flex-col h-full gap-3 w-full">
      <Header 
        energySensorFilter={energySensorFilter} 
        setEnergySensorFilter={setEnergySensorFilter} 
        criticalSensorFilter={criticalSensorFilter} 
        setCriticalSensorFilter={setCriticalSensorFilter}
      />

      <div className="grid h-full grid-cols-app gap-2">
        <Sidebar 
          energySensorFilter={energySensorFilter} 
          criticalSensorFilter={criticalSensorFilter}
          component={component}
          setComponent={setComponent}
        />
    
        <ComponentCard component={component} />
      </div>
    </div>
  )
}
