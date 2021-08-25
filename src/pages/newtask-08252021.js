import React from 'react';
import { addTask } from '../actions/index';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Newtask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { executionAddress: '', functionName: '', resolverAddress: null, resolverFunction: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("Printing event from handleChange", event);
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    const { executionAddress, functionName, resolverAddress, resolverFunction } = this.state
    event.preventDefault();
    this.props.actions.addTask(this.state.executionAddress, this.state.functionName, this.state.resolverAddress, this.state.resolverFunction);
    alert(`
      Gelato's Transaction Details \n
      Execution Address : ${executionAddress}
      Function to be Automated : ${functionName}
      Resolver address : ${resolverAddress}
      Address : ${resolverFunction}
    `)
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75vh'
      }}>
        {/* <form onSubmit={this.props.actions.addTask(this.state.executionAddress, this.state.functionName, this.state.resolverAddress, this.state.resolverFunction)}> */}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='executionAddress'>Execution address</label>
            <input
              name='executionAddress'
              placeholder='executionAddress'
              value={this.state.executionAddress}
              onChange={this.handleChange}
            />
          </div> <br></br>
          <div>
            <label htmlFor='functionName'>Function to be Automated</label>
            <input
              name='functionName'
              placeholder='functionName'
              value={this.state.functionName}
              onChange={this.handleChange}
            />
          </div><br></br>
          <div>
            <label htmlFor='resolverAddress'>Resolver Address</label>
            <input
              name='resolverAddress'
              placeholder='resolverAddress'
              value={this.state.age}
              onChange={this.handleChange}
            />
          </div><br></br>
          <div>
            <label htmlFor='resolverFunction'>Function to be called at the resolver</label>
            <input
              name='resolverFunction'
              placeholder='resolverFunction'
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div><br></br>
          <div>
            <button>Yes, Automate my Smart Contract!</button>
          </div>
        </form>
      </div>
    );
  }
}

// function matchDispatchToProps(dispatch){
//   return bindActionCreators({addTask : addTask}, dispatch)
// }

const mapDispatchToProps = (dispatch) => ({actions:bindActionCreators({addTask : addTask}, dispatch)});

export default connect(null, mapDispatchToProps)(Newtask);
