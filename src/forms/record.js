/* @flow */

import memoize from 'lodash.memoize'

memoize.Cache = WeakMap // memory optimisation

export const checkValidity = memoize((record) => {
  const errors = {}
  for (let index of Array(200).keys()) {
    const name = `field${index}`
    if (index % 23 === 0 && index % 7 !== 0) {
      if (!record[name]) {
        errors[name] = [ 'required field is empty' ]
      }
    }
  }
  return errors
})
