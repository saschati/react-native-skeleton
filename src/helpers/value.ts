export type ToBooleanValue = 'true' | 'false' | 'null' | 'undefined' | '1' | '0'
export function toBoolean(value: ToBooleanValue | unknown): boolean {
  const CAST_STRING = {
    true: true,
    false: false,
    null: false,
    undefined: false,
    '1': true,
    '0': false,
  }

  return (value as ToBooleanValue) in CAST_STRING ? CAST_STRING[value as ToBooleanValue] : Boolean(value)
}

export function isEmpty(value: unknown): boolean {
  return (
    value === undefined ||
    value === null ||
    (Array.isArray(value) && value.length === 0) ||
    (value instanceof Object && Object.keys(value).length === 0)
  )
}
