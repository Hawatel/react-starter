import axios from 'axios';
import * as v from '../../utils/validation';

// below example to import only needed validator methods
/* import { createValidator, required, isInt, isLength } from '../../utils/validation';
export const syncValidate = createValidator({
  cardExpiryY: [required, isInt, isLength({min: 4, max: 4})],
});*/

export const syncValidate = v.createValidator({
  title: [v.required],
  categories: [v.required, v.isInt, v.isLength({min: 5, max: 20})],
  content: [v.required, v.isLength({min: 10, max: 200})],
});

export const asyncValidate = (values/*, dispatch */) => {
  if (!values.categories) {
    return Promise.resolve({})
  }

  return new Promise((resolve, reject) => {
    axios.post("/api/coupon", {
          coupon: values.categories
        })
        .then(function (response) {
          if(response.data.result == 'valid') {
            resolve();
          }
          else {
            reject({ categories: 'Wrong category number' });
          }
        })
        .catch(function (response) {
          reject({ categories: 'Server error: ' + response })
        });
  })
}

export const verifySubmitForm = (values) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(values.title == "Redux Form") {
        alert('Action was successful');
        resolve();
      }
      else {
        reject({title: 'Wrong title', _error: 'Action failed' });
      }
    }, 2000); //simulate server latency
  })
}
