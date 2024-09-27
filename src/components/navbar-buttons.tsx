'use client'

import { Button } from "./Button";
import { GoldIcon } from "./icon-gold";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useSelectedUnit } from "@/contexts/selected-unit-context";
import { optionFetchUnits } from "@/services/queryOptions";

export function NavbarButtons() {
  const { selectedUnit, setSelectedUnit } = useSelectedUnit()
  const { data } = useSuspenseQuery(optionFetchUnits())

  return (
    <div className="grid grid-cols-3 gap-2.5">
      {data?.map(unit => (
        <Button key={unit.id} 
          className="flex gap-2" 
          size="sm" 
          colorScheme="dark" 
          onClick={() => setSelectedUnit(unit.name)} 
          selected={selectedUnit === unit.name}
        >
          <GoldIcon />
          {unit.name} Unit
        </Button>
      ))}
    </div>
  )
}