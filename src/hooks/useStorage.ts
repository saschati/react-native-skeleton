import AsyncStorage from '@/app/storage/async'
import EncryptedStorage from '@/app/storage/encrypted'
import { ValueOf } from '@/types/utils'

export const STORAGE_TYPE = {
  ASYNC: 'async',
  ENCRYPTED: 'encrypted',
} as const

type StorageTypeValue = ValueOf<typeof STORAGE_TYPE>

type StorageMap = {
  [STORAGE_TYPE.ASYNC]: AsyncStorage
  [STORAGE_TYPE.ENCRYPTED]: EncryptedStorage
}

export const storages = new Map<ValueOf<StorageTypeValue>, StorageMap[StorageTypeValue]>([
  [STORAGE_TYPE.ASYNC, new AsyncStorage()],
  [STORAGE_TYPE.ENCRYPTED, new EncryptedStorage()],
])

const useStorage = <T extends StorageTypeValue>(type: T): StorageMap[T] => {
  const storage = storages.get(type)

  if (!storage) {
    throw new Error(`Storage can't be found.`)
  }

  return storage
}

export default useStorage
