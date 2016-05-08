import * as v from '../../utils/validation';
import axios from 'axios';

export const syncValidate = v.createValidator({
  cardNumber: [v.required, v.isCreditCard],
  cardExpiryY: [v.required, v.isInt, v.isLength({min: 4, max: 4})],
  cardExpiryM: [v.required, v.isLength({min: 2, max: 2})],
  cardCVC: [v.required, v.isInt, v.isLength({min: 3, max: 4})],
  couponCode: [v.isLength({min: 5, max: 10})],
});

export const asyncValidate = (values/*, dispatch */) => {
  if (!values.couponCode) {
    return Promise.resolve({})
  }

  return new Promise((resolve, reject) => {
    axios.post("/api/coupon", {
          coupon: values.couponCode
        })
        .then(function (response) {
          if(response.data.result == 'valid') {
            resolve();
          }
          else {
            reject({ couponCode: 'Wrong coupon number' });
          }
        })
        .catch(function (response) {
          reject({ couponCode: 'Server error: ' + response })
        });
  })
}

export const verifyCreditCard = (values) => {
  return new Promise((resolve, reject) => {
    const API = "/api/payment";
    var respons = '';

    axios.post(API, {
          number: values.cardNumber,
          year: values.cardExpiryY,
          month: values.cardExpiryM,
          cvc: values.cardCVC
        })
        .then(function (response) {
          if(response.data.result == 'valid') {
            alert('Payment was successful');
            resolve();
          }
          else {
            reject({
              cardNumber: 'Wrong information about credit card',
              cardExpiryY: ' ',
              cardExpiryM: ' ',
              cardCVC: ' ',
              _error: 'Payment failed' });
          }
        })
        .catch(function (response) {
          reject({ cardNumber: 'Server error: ' + response });
        });
  });
}
