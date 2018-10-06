import React, { Component } from 'react';
class Counter extends Component {
  renderTags() {
    if (this.state.tags.length === 0) return <p>Ther are no tags</p>;
    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  render() {
    let classes = this.getBadgeClasses();
    return (
      <div className="row">
        <div className="col-1">
          <span className={classes}>{this.formatCount()}</span>
        </div>
        <div className="col-3">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            disabled={this.formatCount() === 'zero'}
            onClick={() => this.props.onDecrement(this.props.counter)}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'zero' : value;
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;
