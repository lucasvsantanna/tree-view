import { ReceptorIcon } from "./icon-receptor";
import { SensorIcon } from "./icon-sensor";
import { TreeNode } from "@/utils/build-tree";
import { Asset } from "@/services/assets/assets-api";
import { AddPhotoIcon } from "./icon-add-photo";
import { AlertStatusIcon } from "./icon-alert-status";
import { BoltIcon } from "./icon-bolt";
import { OperatingStatusIcon } from "./icon-operating-status";
import { EIcon } from "./icon-E";

interface ComponentCardProps {
  component: TreeNode
}

export function ComponentCard({ component }: ComponentCardProps) {
  const isCritical = (node: TreeNode) => {
    if ('status' in node && node.status === 'alert') {
      return <span className='ml-2'><AlertStatusIcon /></span>
    }
  }

  const isOperating = (node: TreeNode) => {
    if ('status' in node && node.status === 'operating') {
      return <span className='ml-2'><OperatingStatusIcon /></span>
    }
  }

  const isEnergy = (node: TreeNode) => {
    if ('sensorType' in node && node.sensorType === 'energy') {
      return <span className='ml-2'><BoltIcon /></span>
    }
  }

  return (
    <div className="border border-border-card rounded-sm">
      <div className="flex items-center h-14 border-b px-4 border-b-border-card">
        <p className="font-semibold flex items-center gap-2 text-lg">{component.name}{isCritical(component)}{isEnergy(component)}{isOperating(component)}</p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-6 h-57">
          <div className="border rounded flex items-center justify-center border-blue-400 bg-blue-50 border-dashed w-84 h-57">
            <div className="flex items-center flex-col gap-1">
              <AddPhotoIcon />
              <p className="text-blue-500 text-sm font-normal">Adicionar imagem do Ativo</p>
            </div>
          </div>

          <div className="py-8">
            <div className="flex flex-col gap-2">
              <p className="text-md font-semibold text-gray-950">
                Tipo de Equipamento
              </p>
              <p className="text-md font-normal text-gray-500">
                Motor Elétrico (Trifásico)
              </p>
            </div>

            <div className="h-px w-full bg-border-card my-6" />

            <div className="flex flex-col gap-2">
              <p className="text-md font-semibold text-gray-950">
                Responsáveis
              </p>
              <p className="text-md font-normal flex items-center gap-2 text-gray-500">{<EIcon />} Elétrica</p>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-border-card my-6" />

        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-2">
            <p className="text-md font-semibold text-gray-950">Sensor</p>
            <p className="text-md font-normal text-gray-500 flex items-center gap-2">
              <SensorIcon />
              {(component as Asset).sensorId ?? 'N/A'}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-md font-semibold text-gray-950">Receptor</p>
            <p className="text-md font-normal text-gray-500 flex items-center gap-2">
              <ReceptorIcon />
              {(component as Asset).gatewayId ?? 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}