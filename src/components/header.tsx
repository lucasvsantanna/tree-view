import { useQueryClient } from '@tanstack/react-query';
import { Button } from './Button'
import { CircledExclamation } from './icon-circled-exclamation'
import { ThunderboltIcon } from './icon-thunderbolt'
import { useEffect, useState } from 'react';
import { useSelectedUnit } from '@/contexts/selected-unit-context';

interface HeaderProps {
  energySensorFilter: boolean;
  setEnergySensorFilter: (value: boolean) => void;
  criticalSensorFilter: boolean;
  setCriticalSensorFilter: (value: boolean) => void;
}

export function Header({
  energySensorFilter,
  setEnergySensorFilter,
  criticalSensorFilter,
  setCriticalSensorFilter,
}: HeaderProps) {
  const { selectedUnit } = useSelectedUnit()

  return (
    <div className="w-full flex items-center justify-between">
      <p className="font-semibold text-xl text-gray-950">
        Ativos{' '}
        <span className="text-gray-400 text-sm font-normal">/ {selectedUnit} Unit</span>
      </p>

      <div className="flex items-center gap-2">
        <Button onClick={() => setEnergySensorFilter(!energySensorFilter)} selected={energySensorFilter} className="flex gap-1.5">
          <ThunderboltIcon selected={energySensorFilter} />
          Sensor de Energia
        </Button>

        <Button onClick={() => setCriticalSensorFilter(!criticalSensorFilter)} selected={criticalSensorFilter} className="flex gap-1.5">
          <CircledExclamation selected={criticalSensorFilter} />
          Crítico
        </Button>
      </div>
    </div>
  )
}
