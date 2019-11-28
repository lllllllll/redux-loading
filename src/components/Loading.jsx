import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

const Loading = () => {
  const getLoading = useSelector(state => _.findKey(state , ['status', 'PENDING']));
  return (
    <>
      {getLoading ?
        <div className="Box-load">
          <div className="loading">Loading...</div>
        </div> : null}
    </>
  );
};

export default Loading;
