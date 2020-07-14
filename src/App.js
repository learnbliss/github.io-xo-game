import React from 'react';
import './App.css';
import Game from './components/Game';
import TableGame from './components/TableGame';
import {connect} from 'react-redux';
import {counterOSelector, counterXSelector} from './redux/selectors';
import PropTypes from 'prop-types';

function App({counterX, counterO}) {
  return (
    <div className="App">
      <Game/>
      {counterX !== 0 || counterO !== 0 ?
          <TableGame/> : null}
    </div>
  );
}

Game.propTypes = {
    counterX: PropTypes.number,
    counterO: PropTypes.number,
};

export default connect((state) => ({
    counterX: counterXSelector(state),
    counterO: counterOSelector(state),
}))(App);
