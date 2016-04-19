import React, { Component } from 'react';

// component styles
import { styles } from './styles.scss';
import FontAwesome from 'react-fontawesome'

export class Items extends Component {

  static propTypes = {
    items: React.PropTypes.array,
    delItem: React.PropTypes.func,
    doneItem: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  onDelete = (event) => {
    event.preventDefault();
    const index = event.currentTarget.dataset.index;
    this.props.delItem(index);
  };

  onChange = (event) => {
    const index = event.currentTarget.dataset.index;
    this.props.doneItem(index, event.target.checked);
  }

  render() {
    const { items } = this.props;

    return (
      <div className={styles}>
        {!items.length && <span>Array is empty</span>}
        {
          items.map((item, index) =>
            <div className="row checkbox" key={index}>
              <input type="checkbox"
                     data-index={index}
                     checked={item.done}
                     onChange={this.onChange}
              />

              <button className="btn btn-warning remove"
                      data-index={index}
                      onClick={this.onDelete}
              >
                <FontAwesome
                    className='super-crazy-colors'
                    name='trash'
                    size='2x'
                    //spin
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
              </button>

              <label>
                  {`${item.text}`}
              </label>
            </div>
          )
        }
        </div>
    );
  }
}
