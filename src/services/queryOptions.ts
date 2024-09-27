'use client'

import { useSelectedUnit } from "@/contexts/selected-unit-context";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { companiesApi } from "./companies/companies-api";
import { Asset, assetsApi } from "./assets/assets-api";
import { Location, locationApi } from "./locations/locations-api";

export function optionFetchUnits() {
  return queryOptions({
    queryKey: ['units'],
    queryFn: async () => {
      const units = await companiesApi.getUnits()
      return units
    }
  })
}

export function optionsUnitData(selectedUnit: string) {
  return queryOptions({
    queryKey: ['selected-unit-data', selectedUnit],
    queryFn: async () => {
      const unitsData = await companiesApi.getUnits()
      const unitId = unitsData?.find(unit => unit.name === selectedUnit)?.id

      const locations = unitId && await locationApi.getLocations(unitId)
      const assets = unitId && await assetsApi.getAssets(unitId)

      const treeData = (locations as Location[]).concat(assets as Asset[])
      
      return treeData
    }
  })
}

export function optionsFetchUnitData(selectedUnit: string) {
  return queryOptions({
    queryKey: ['selected-unit-data', selectedUnit],
    queryFn: async () => {
      const unitsData = await companiesApi.getUnits()
      const unitId = unitsData?.find(unit => unit.name === selectedUnit)?.id

      const locations = unitId && await locationApi.getLocations(unitId)
      const assets = unitId && await assetsApi.getAssets(unitId)
      
      return { locations, assets }
    }
  })
}