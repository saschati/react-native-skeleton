import { API_URL } from '@env'

export interface Environment {
  apiUrl: string
}

const env: Environment = {
  apiUrl: API_URL || (process.env.API_URL as string),
}

export default env
