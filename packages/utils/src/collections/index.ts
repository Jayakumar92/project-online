export function ifObjectExist(value: object) {
  let is_valid = true;
  if (Object.keys(value).length !== 0) {
    is_valid = false;
  }
  return is_valid;
}

type ArrayItem<T> = {
  [K in keyof T]: T[K];
};

export function getObjectFromArrayByKey<T extends Record<string, unknown>>(
  array: ArrayItem<T>[],
  key: keyof T,
  value: T[keyof T],
): ArrayItem<T> | undefined {
  return array.find((item) => item[key] === value);
}

export function ifObjectKeyExist(object: Record<string, unknown>, key: string): boolean {
  return object[key] !== undefined;
}

export function getArrayFromArrayOfObject<T extends Record<string, unknown>>(
  data: T[],
  key: keyof T,
) {
  const modifiedArr: (T[keyof T] | null | undefined)[] = [];
  if (data && data.length > 0) {
    data.forEach((el) => {
      modifiedArr.push(el[key]);
    });
  }
  return modifiedArr;
}

export function isKeyValueExistInArray(
  array: Record<string, unknown>[],
  key: string,
  value: string,
): boolean {
  return array.some((item) => item[key] === value);
}

export const convertObjectToArray = (obj: Record<string, unknown>) => {
  return Object.entries(obj).map(([key, value]) => ({ key, value }));
};
