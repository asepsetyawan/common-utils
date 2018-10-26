'use strict'

/**
 * simple email validator
 * @name isEmail
 * @param {string} email - the email to validate upon
 * @returns {boolean}
 * @example
 * isEmail('not an email') => false
 * isEmail('valid.email@gmail.com') => true
 * isEmail('@invalid.com') => false
 *
 */

export default function isEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}
