import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'
import  './confirmation.css';
class Confirmation extends Component {
  state = { open: true }

  open = () => { this.setState({ open: true })}
  close = (event) => {
      this.setState({ open: false });
       this.props.response(event);
    }

  render() {
    return (
      <div>
        <Confirm
          open={this.state.open}
          onCancel={() => this.close(false)}
          onConfirm={() => this.close(true)}
        />
        </div>
    )
  }
}

export default Confirmation
