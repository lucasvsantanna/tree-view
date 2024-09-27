import { api } from '../api'

export type Location = {
  id: string
  name: string
  parentId?: string
}

const getLocations = async (companyId: string): Promise<Location[]> => {
  try {
    const { data } = await api.get(
      `/companies/${companyId}/locations`,
    )

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const locationApi = {
  getLocations,
}
