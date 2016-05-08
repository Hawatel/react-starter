import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import {syncValidate, asyncValidate, verifyCreditCard} from './validation';

// component styles
import { styles } from './styles.scss';

class Payment extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    // this is equal: const title = this.props.fields.title  ..
    const { asyncValidating, submitting, error, fields: {cardNumber, cardExpiryY, cardExpiryM, cardCVC, couponCode}, handleSubmit} = this.props;

    return(
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="panel panel-default credit-card-box" className={`${styles}`}>
                <div className="panel-heading display-table" >
                  <div className="row display-tr" >
                    <h3 className="panel-title display-td" >Payment Details</h3>
                    <div className="display-td" >
                      <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"/>
                    </div>
                  </div>
                </div>
                <div className="panel-body">
                  <form onSubmit={handleSubmit(verifyCreditCard)}>
                    <div className="row">
                      {error && <div className="text-center text-danger"><strong>{error}</strong></div>}
                      <div className="col-xs-12">
                        <div className="form-group">
                          <label for="cardNumber">CARD NUMBER</label>
                          <div className="input-group">
                            <input
                                type="text"
                                className={`form-control ${cardNumber.touched && cardNumber.invalid ? 'has-danger' : ''}`}
                                name="cardNumber"
                                placeholder="Valid Card Number (number: 4916270684628641)"
                                {...cardNumber}
                            />
                            <span className="input-group-addon"><i className="fa fa-credit-card"></i></span>
                          </div>
                          {cardNumber.touched && cardNumber.error && <div className="text-danger">{cardNumber.error}</div>}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6 col-md-6">
                        <div className="form-group">
                          <label for="cardExpiry">EXPIRATION DATE</label>
                          <div className="col-xs-6 col-md-6 col-no-padding pull-left">
                            <input
                                type="text"
                                className={`form-control ${cardExpiryY.touched && cardExpiryY.invalid ? 'has-danger' : ''}`}
                                name="cardExpiryY"
                                placeholder="YYYY (2030)"
                                {...cardExpiryY}
                            />
                          </div>
                          <div className="col-xs-5 col-md-5 col-no-padding pull-right">
                            <input
                                type="text"
                                className={`form-control ${cardExpiryM.touched && cardExpiryM.invalid ? 'has-danger' : ''}`}
                                name="cardExpiryM"
                                placeholder="MM (10)"
                                {...cardExpiryM}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-xs-5 col-md-5 pull-right">
                        <div className="form-group">
                          <label for="cardCVC">CV CODE</label>
                          <input
                              type="text"
                              className={`form-control ${cardCVC.touched && cardCVC.invalid ? 'has-danger' : ''}`}
                              name="cardCVC"
                              placeholder="CVC (321)"
                              {...cardCVC}
                          />
                          {cardCVC.touched && cardCVC.error && <div className="text-danger">{cardCVC.error}</div>}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="form-group">
                          <label for="couponCode">COUPON CODE</label>
                          <div className="input-group" style={{"width": "100%"}}>
                            <input
                                type="text"
                                className="form-control"
                                name="couponCode"
                                placeholder="This field uses an async validation method (code: 12345)"
                                {...couponCode}
                            />
                            {asyncValidating === 'couponCode' && <span className="input-group-addon"><i className="fa fa-cog fa-spin"/></span>}
                          </div>
                          {couponCode.touched && couponCode.error && <div className="text-danger">{couponCode.error}</div>}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12 text-center">
                        <Link to="/form" className="btn btn-warning btn-lg">Cancel</Link>
                        <button
                            className="btn btn-success btn-lg"
                            type="submit"
                            disabled={submitting || asyncValidating === true}>Pay {submitting && <i className='fa fa-cog fa-spin' />}</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );

  }
}

function mapStateToProps(state) {
  return { payment: state.form.Payment }
}

// "inject" redux-form functionality to PostNew object
export default reduxForm({
  form: 'Payment',
  fields: ['cardNumber', 'cardExpiryY', 'cardExpiryM', 'cardCVC', 'couponCode'],
  asyncValidate,
  asyncBlurFields: ['couponCode'],
  validate: syncValidate,
}, mapStateToProps)(Payment);
