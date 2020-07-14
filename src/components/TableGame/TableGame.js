import React from 'react';
import styles from './TableGame.module.scss'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {counterOSelector, counterXSelector} from '../../redux/selectors';
import {resetCounters} from '../../redux/actions';

const TableGame = ({counterX, counterO, resetCounters}) => {
    return (
        <div className={styles.root}>
            <div className={styles.score}><span><button onClick={() => resetCounters()}>Reset counters</button></span> Score:</div>
            <div className={styles.grid}>
                <div>X score: <b>{counterX}</b></div>
                <div>O score: <b>{counterO}</b></div>
            </div>
        </div>
    );
};

TableGame.propTypes = {
    counterX: PropTypes.number,
    counterO: PropTypes.number,
    resetCounters: PropTypes.func.isRequired,
};

export default connect((state) => ({
    counterX: counterXSelector(state),
    counterO: counterOSelector(state),
}), {
    resetCounters
})(TableGame);
