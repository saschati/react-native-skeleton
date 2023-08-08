import EncryptedStorageBase from 'react-native-encrypted-storage'
import Storage from './storage'

class EncryptedStorage implements Storage {
  async set<T>(name: string, value: T): Promise<void> {
    let _value = String(value)
    if (value instanceof Object) {
      _value = JSON.stringify(value)
    }

    await EncryptedStorageBase.setItem(name, _value)
  }

  async has(name: string): Promise<boolean> {
    return (await this.get(name, false)) !== false
  }

  async get<T, D>(name: string, defaultVal: D | null = null): Promise<T | D | null> {
    const data = await EncryptedStorageBase.getItem(name)
    if (data === null) {
      return defaultVal
    }

    try {
      return JSON.parse(data) as T
    } catch (e) {
      return data as T
    }
  }

  async remove(name: string): Promise<void> {
    return await EncryptedStorageBase.removeItem(name)
  }
}

export default EncryptedStorage
