import { Asset } from "@/services/assets/assets-api";
import { Location } from "@/services/locations/locations-api";

type TreeNodeAsset = Asset & { children?: TreeNode[] }
type TreeNodeLocation = Location & { children?: TreeNode[] }

export type TreeNode = TreeNodeAsset | TreeNodeLocation

type BuildTree = {
  locations: Location[]
  assets: Asset[]
}

export const buildTree = ({ locations, assets }: BuildTree) => {
  const mapLocation: { [key: string]: TreeNodeLocation } = {}
  const mapAsset: { [key: string]: TreeNodeAsset } = {}
  const roots: TreeNode[] = []
  
  locations.forEach(item => {
    mapLocation[item.id] = { ...item, children: [] }
  })

  assets.forEach(item => {
    mapAsset[item.id] = { ...item, children: [] }
  })

  locations.forEach(item => {
    if (item.parentId) {
      mapLocation[item.parentId].children?.push(mapLocation[item.id])
    } else {
      roots.push(mapLocation[item.id])
    }
  })

  assets.forEach(item => {
    if (item.locationId) {
      mapLocation[item.locationId].children?.push(mapAsset[item.id])
    } else if (item.parentId) {
      mapAsset[item.parentId].children?.push(mapAsset[item.id])
    } else {
      roots.push(mapAsset[item.id])
    }
  })

  return roots
}
