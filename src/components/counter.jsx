import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }

    renderTags() {
      if (this.state.tags.length === 0) return <p>Ther are no tags</p>
      return this.state.tags.map(tag => <li key={tag}>{tag}</li> )
    }
    render() { 
      let classes = this.getBadgeClasses();
      return ( 
        <div> 
          <span className={classes}>{this.formatCount()}</span>
          <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
          {this.renderTags()}
        </div> 
      );
    }
    handleIncrement = () => {
      console.log(this.state.count);
      this.setState({count: this.state.count + 1})
    }
    formatCount() {
     const { count } = this.state;
     return  count === 0 ? 'zero' : count;
    }

    getBadgeClasses() {
      let classes = 'badge m-2 badge-';
      classes += this.state.count === 0 ? 'warning' : 'primary';
      return classes;

    }
}
 
export default Counter;