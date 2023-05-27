/**
 * Enumerates methods to an array
 * @return [{value: '', label: ''}]
 */
export function enumToArr(
  enumValue: any,
  include: any[] | null = [],
  exclude: any[] | null = []
) {
  const keysArr = Object.keys(enumValue)
  const arrayObjects: any[] = []
  if (include && include.length) {
    include.forEach((item) => {
      if (exclude && exclude.includes(item)) {
        return
      }
      arrayObjects.push({
        value: item,
        label: enumValue[item],
      })
    })
  } else {
    keysArr.forEach((item) => {
      if (exclude && exclude.includes(item)) {
        return
      }

      arrayObjects.push({
        value: item,
        label: enumValue[item],
      })
    })
  }
  return arrayObjects
}
