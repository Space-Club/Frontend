import { STORAGE_KEYS } from '@constants/storageKeys';

type StorageKeys = keyof typeof STORAGE_KEYS;

const setStorage = <T>(key: StorageKeys, value: T) => {
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch {
    throw new Error('로컬 스토리지에 값을 저장하는 도중 오류가 발생했습니다.');
  }
};

const getStorage = <T>(key: StorageKeys, defaultValue?: unknown): T => {
  const jsonValue = localStorage.getItem(key);
  // if (!jsonValue && !defaultValue) {
  //   throw new Error('로컬 스토리지에 존재하지 않는 값입니다.');
  // } #TODO: 에러 처리
  return jsonValue ? JSON.parse(jsonValue) : defaultValue;
};

const deleteStorage = (key: StorageKeys) => {
  localStorage.removeItem(key);
};

export { getStorage, setStorage, deleteStorage };
