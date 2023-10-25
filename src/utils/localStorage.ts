import { STORAGE_KEYS } from '@constants/storageKeys';

type StorageKeys = keyof typeof STORAGE_KEYS;

const setStorage = <T>(key: StorageKeys, value: T) => {
  try {
    const stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  } catch {
    throw new Error('로컬 스토리지에 값을 저장하는 도중 오류가 발생했습니다.');
  }
};

const getStorage = <T>(key: StorageKeys): T => {
  try {
    const jsonValue = localStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : null;
  } catch {
    throw new Error('로컬 스토리지에 존재하지 않는 값입니다.');
  }
};

const deleteStorage = (key: StorageKeys) => {
  try {
    localStorage.removeItem(key);
  } catch {
    throw new Error('로컬 스토리지에 존재하지 않는 값입니다.');
  }
};

export { getStorage, setStorage, deleteStorage };
