/* @flow */

import memoize from 'lodash.memoize'

memoize.Cache = WeakMap // memory optimisation

const generateSchema = () => {
  const schema = {
    title: 'BigForm',
    type: 'object',
    properties: {},
    required: []
  }

  for (let index of Array(200).keys()) {
    const name = `field${index}`
    let isHiddenIfPrecedingIsEmpty = index % 10 === 7
    let isRequired = !isHiddenIfPrecedingIsEmpty && index % 23 === 0

    if (isRequired) {
      schema.required.push(name)
    }

    const field = {}
    schema.properties[name] = field

    if (index % 10 === 0) {
      // DateTimeField
      field.type = 'string'
      field.format = 'date-time'

    } else if (index % 10 === 3) {
      // SelectField
      field.type = 'integer'

    } else if (index % 10 === 5) {
      // GeolocationField
      field.type = 'object'
      field.properties = {
        latitude: { type: 'number' },
        longitude: { type: 'number' }
      }

    } else {
      // TextField
      field.type = 'string'
    }

    if (isHiddenIfPrecedingIsEmpty) {
      // isHiddenIfPrecedingIsFalsey
      field['$bmforms'] = {
        hiddenIfPrecedingIsEmpty: true
      }
    }
  }

  return schema
}

export const schema = generateSchema()

export const checkValidity = memoize((record) => {
  const errors = {}
  for (let name of schema.required) {
    if (!record[name]) {
      errors[name] = [ 'required field is empty' ]
    }
  }
  return errors
})

export default {
  checkValidity,
  schema
}
