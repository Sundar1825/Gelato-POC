import React from 'react';
import { connect } from "react-redux";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class Taskhistory extends React.Component {
  constructor(props) {
    super(props);
    console.log("Printing Props", this.props);
    this.state = {
      executionAddress: this.props.executionAddress,
      functionName: this.props.functionName,
      resolverAddress: this.props.resolverAddress,
      resolverFunction: this.props.resolverFunction,
      rowData: [{ ExecutionAddress: this.props.executionAddress, FunctionName: this.props.functionName, ResolverAddress: this.props.resolverAddress, ResolverFunction: this.props.resolverFunction, TaskCreationTime: Date().toLocaleString()},
      { ExecutionAddress: "0x60779b57bd5f575b4013619033b0d44862b4a808ef9b5135cd75363df1754efd", FunctionName: "Counter.sol", ResolverAddress: "0x63C51b1D80B209Cf336Bec5a3E17D3523B088cdb", ResolverFunction: "CounterResolver.sol" , TaskCreationTime: "Wed Aug 18 2021 09:00:00"}]
    };
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{ height: '1000px', width: '1200px' }}
      >
        <AgGridReact
          rowData={this.state.rowData}>
          <AgGridColumn field="ExecutionAddress" sortable={true} filter={true}></AgGridColumn>
          <AgGridColumn field="FunctionName" sortable={true} filter={true}></AgGridColumn>
          <AgGridColumn field="ResolverAddress" sortable={true} filter={true}></AgGridColumn>
          <AgGridColumn field="ResolverFunction" sortable={true} filter={true}></AgGridColumn>
          <AgGridColumn field="TaskCreationTime" sortable={true} filter={true}></AgGridColumn>
        </AgGridReact>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    executionAddress: state.executionAddress,
    functionName: state.functionName,
    resolverAddress: state.resolverAddress,
    resolverFunction: state.resolverFunction
  };
};

export default connect(mapStateToProps)(Taskhistory);