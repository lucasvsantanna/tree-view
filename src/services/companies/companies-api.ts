import { api } from '../api'

export type Unit = {
  id: string
  name: string
}

const getUnits = async (): Promise<Unit[]> => {
  try {
    const { data } = await api.get('/companies')

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const companiesApi = {
  getUnits,
}
