import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setDiffAction } from './store/diff';

const DiffCounter = (props) => {
  const {diff, setDiff} = props;

  const handleChange = (e) => {
    const strValue = e.target.value;
    const numValue = parseInt(strValue);
    setDiff(numValue);
  }

  return (
    <div>
      <p>Diff Maker</p>
      <input type="number" value={diff} onChange={handleChange} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    diff: state.diffReducer.diff
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setDiff: setDiffAction
  }, dispatch);
} 
 
export default connect(mapStateToProps, mapDispatchToProps)(DiffCounter);