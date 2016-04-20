import expect from 'expect';
import { exampleAction } from 'redux/modules/items';

describe('(Form) Username', () => {
  it('exists action', () => {
    const expectedAction = {
      type: 'GET_EXAMPLE_ACTION',
      payload: ['daniel']
    };

    expect(exampleAction()).toEqual(expectedAction);
  })
})
