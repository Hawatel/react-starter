import expect from 'expect';
import { items } from 'redux/modules/items';

const initialState = {
  items: [],
};

describe('Items reducer:', () => {
  it('should return the initial state', () => {
    expect(
      items(initialState, {})
    ).toEqual(initialState);
  });

  it('should handle ADD', () => {
    const stateAfterAdd = {
      items: [{
        text: 'test',
        done: false
      }],
    };
    const fields =  { name: { value: 'test'}};
    expect(
      items(initialState, {
        type: 'ADD_ITEM',
        fields: fields,
      })
    ).toEqual(stateAfterAdd);
  });

  it('should handle DELETE', () => {
    const stateWithItem = {
      items: [{
        text: 'test'
      }],
    };
    expect(
      items(stateWithItem, {
        type: 'DELETE_ITEM',
        index: 0
      })
    ).toEqual(initialState);
  });

  it('should handle DONE', () => {
    const stateWithItem = {
      items: [{
        text: 'test',
        done: false
      }],
    };

    const stateItemDone = {
      items: [{
        text: 'test',
        done: true
      }],
    };

    expect(
        items(stateWithItem, {
          type: 'DONE_ITEM',
          index: 0,
          done: true
        })
    ).toEqual(stateItemDone);
  });
});
