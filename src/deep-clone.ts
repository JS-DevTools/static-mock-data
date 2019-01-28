type ObjectOrArray = Record<string | number, unknown>;

/**
 * Deep-clones a JSON object or array.
 */
export function deepClone<T extends ObjectOrArray>(obj: T): T  {
  let clone: ObjectOrArray = Array.isArray(obj) ? [] : {};

  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value) {
      value = deepClone(value);
    }
    clone[key] = value;
  }

  return clone as T;
}
