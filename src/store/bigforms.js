import Chance from 'chance'

import { schema } from '../forms/bigform.js'

const chance = new Chance()

const randomRecordData = () => {
  const record = {}
  Object.keys(schema.properties).forEach((name, index) => {
    const field = schema.properties[name]

    if (field.type === 'string' && field.format === 'date-time') {
      record[name] = (new Date(chance.timestamp() * 1e3)).toISOString().replace('Z', '')

    } else if (field.type === 'integer') {
      record[name] = chance.integer({ min: 0, max: 99 })

    } else if (field.type === 'object' && field.properties.latitude && field.properties.longitude) {
      record[name] = {
        latitude: chance.floating({ min: -179.9999, max: 180 }),
        longitude: chance.floating({ min: -179.9999, max: 180 })
      }

    } else if (field.type === 'string') {
      record[name] = chance.sentence({ words: chance.integer({ min: 1, max: 4 }) })
    }
  })
  return record
}

const records = new Map()

chance.n(randomRecordData, 10).forEach((record) => {
  records.set(chance.guid(), record)
})

export default records
