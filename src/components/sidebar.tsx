import { useSelectedUnit } from "@/contexts/selected-unit-context";
import { SearchIcon } from "./icon-search";
import { TreeView } from "./TreeView";
import { useQuery } from "@tanstack/react-query";
import { optionsFetchUnitData, optionsUnitData } from "@/services/queryOptions";
import { useState } from "react";
import { Location } from "@/services/locations/locations-api";
import { Asset } from "@/services/assets/assets-api";
import { TreeNode } from "@/utils/build-tree";

interface SidebarProps {
  energySensorFilter: boolean
  criticalSensorFilter: boolean
  component: TreeNode
  setComponent: (node: TreeNode) => void
}

export function Sidebar({
  energySensorFilter,
  criticalSensorFilter,
  component,
  setComponent,
}: SidebarProps) {
  const { selectedUnit } = useSelectedUnit()
  const { data: treeData } = useQuery(optionsFetchUnitData(selectedUnit))
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <aside className="border max-h-screen overflow-y-auto rounded-sm border-border-card">
      <div className="px-3 h-11 border-b-border-card border-b w-full flex items-center">
        <input type="text" onChange={handleSearchChange} className="flex-1 outline-none placeholder:text-sm placeholder:font-normal placeholder:text-['#C1C9D2']" placeholder="Buscar Ativo ou Local" />
        <button className="px-2.5">
          <SearchIcon />
        </button>
      </div>

      <TreeView 
        locations={treeData?.locations as Location[]} 
        assets={treeData?.assets as Asset[]}
        searchTerm={searchTerm}
        energySensorFilter={energySensorFilter}
        criticalSensorFilter={criticalSensorFilter}
        component={component}
        setComponent={setComponent}
      />
    </aside>
  )
}
