/**
 *  TypeScript를 사용하여 객체에서 특정 값에 해당하는 키를
 * 검색하는 유틸리티 함수인 getKeyByValue를 정의
 * 이 함수는 주어진 객체(일반적으로 열거형(enum) 객체와 같이
 * 키-값 쌍을 가지는 객체)에서 주어진 값에 해당하는 키를 찾아
 * 반환하거나, 값과 일치하는 키가 없는 경우 null을 반환함
 */

/**
 * getKeyByValue 함수는 두 개의 매개변수를 가짐.
 * enumObj는 객체로, 키-값 쌍을 포함하며, value와 일치하는 키를 찾을 대상
 * value는 찾고자 하는 값
 */
export function getKeyByValue<T extends { [index: string]: string }>(
  enumObj: T,
  value: string,
): keyof T | null {
  for (const key in enumObj) {
    //함수 내에서 for...in 루프를 사용하여 enumObj 객체의 모든 키를 반복
    if (enumObj[key] === value) {
      //각 반복에서 현재 키(key)에 해당하는 값(enumObj[key])을 가져와서, 이 값이 value와 일치하는지 확인
      return key as keyof T;
      //일치하는 키를 찾으면 해당 키를 반환하고,
      //as keyof T를 사용하여 타입 캐스팅을 수행하여
      //해당 키가 객체 enumObj의 키로 존재하는 것임을
      //타입스크립트에 알려줌
    }
  }
  return null; //일치하는 키가 없는 경우 null을 반환
}
