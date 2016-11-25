import Chance from 'chance'

const chance = new Chance()

const randomRecordData = () => {
  const record = {}
  ;(new Array(200)).fill(null).forEach((unused, index) => {
    const name = `field${index}`
    if (index % 10 === 0) {
      record[name] = (new Date(chance.timestamp())).toISOString().replace('Z', '')
    } else if (index % 10 === 3) {
      record[name] = chance.integer({ min: 0, max: 99 })
    } else if (index % 10 === 5) {
      record[name] = {}
    } else {
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
