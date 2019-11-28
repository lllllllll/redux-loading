async function checkStatus(dispatch, type, res) {
  const data = await res.json();
  if (res.status === 200 || res.status === 201) {
    return dispatch({ type: type.success, data, status: res.status });
  }

  return dispatch({ type: type.failure, data: null, status: res.status ? res.status : res });
}

function error(dispatch, type) {
  dispatch({
    type: type.failure,
    data: null,
    status: 500,
  });
}

export const get = async (dispatch, type, url, params) => {
  dispatch({ type: type.loading, status: 'PENDING' });
  try {
    const paramsFormat = params ? new URLSearchParams(Object.entries(params)).toString() : '';
    const res = await fetch(`${url + paramsFormat}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    checkStatus(dispatch, type, res);
  } catch (err) {
    return error(dispatch, type);
  }
};

export const post = async (dispatch, type, url, params, isFile) => {
  dispatch({ type: type.loading, status: 'PENDING' });
  try {
    const res = await fetch(`${url}`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: new Headers({
        'Content-Type': 'application/json',
        'enctype': isFile ? 'multipart/form-data' : null,
      }),
    });
    checkStatus(dispatch, type, res);
  } catch (err) {
    return error(dispatch, type);
  }
};

export const patch = async (dispatch, type, url, params, isFile) => {
  dispatch({ type: type.loading, status: 'PENDING' });
  try {
    const res = await fetch(`${url}`, {
      method: 'PATCH',
      body: JSON.stringify(params),
      headers: new Headers({
        'Content-Type': 'application/json',
        'enctype': isFile ? 'multipart/form-data' : null,
      }),
    });

    checkStatus(dispatch, type, res);
  } catch (err) {
    return error(dispatch, type);
  }
};


export const del = async (dispatch, type, url) => {
  dispatch({ type: type.loading, status: 'PENDING' });
  try {
    const res = await fetch(`${url}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });

    checkStatus(dispatch, type, res);
  } catch (err) {
    return error(dispatch, type);
  }
};