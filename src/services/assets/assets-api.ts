import { api } from '../api'

export type Asset = {
  id: string
  name: string
  locationId?: string
  parentId?: string
  sensorId?: string
  sensorType?: string
  status?: string
  gatewayId?: string
}

const getAssets = async (companyId: string): Promise<Asset[]> => {
  try {
    const { data } = await api.get(`/companies/${companyId}/assets`)

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const assetsApi = {
  getAssets,
}
