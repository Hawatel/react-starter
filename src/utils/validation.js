// more validation rules to implementation: https://github.com/chriso/validator.js
import validator from 'validator';

const isEmpty = value => value === undefined || value === null || value === '';
const join = (rules) => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0 /* first error */ ];

export function isEmail(value) {
  if (!isEmpty(value) && !validator.isEmail(value)) {
    return 'Invalid email address';
  }
}

export function isLength(opts) {
  return value => {
    if (!isEmpty(value) && !validator.isLength(value, opts)) {
      if (opts.min != 'undefined' && opts.max != 'undefined') {
        if(opts.min == opts.max) {
          return `Length must be equal ${opts.min} character(s)`;
        }
        else {
          return `Length must be between ${opts.min} and ${opts.max} characters`;
        }
      }
      else if(opts.min != 'undefined') {
        return `Length must be at least ${opts.min} character(s)`;
      }
      else if(opts.max != 'undefined') {
        return `Length must be no more than ${opts.max} character(s)`;
      }
      return '';
    }
  };
}

export function isInt(value) {
  if (!isEmpty(value) && !validator.isInt(value)) {
    return 'Must be an integer';
  }
}

export function isCreditCard(value) {
  if (!isEmpty(value) && !validator.isCreditCard(value)) {
    return 'Invalid credit card number';
  }
}

export function required(value) {
  if (isEmpty(value)) {
    return 'Required';
  }
}

export function oneOf(enumeration) {
  return value => {
    if (!~enumeration.indexOf(value)) {
      return `Must be one of: ${enumeration.join(', ')}`;
    }
  };
}

export function match(field) {
  return (value, data) => {
    if (data) {
      if (value !== data[field]) {
        return 'Do not match';
      }
    }
  };
}

export function createValidator(rules) {
  return (data = {}) => {
    const errors = {};
    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}