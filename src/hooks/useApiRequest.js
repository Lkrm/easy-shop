import { useState, useContext } from 'react';
import { ErrorContext } from 'hoc/withErrorWrapper';

// todo: Read jsdoc; is not correct write returns and params in shape
/**
  @func useApiRequest
  The hook provide you with state for saving data and pending status of api requests.
  Also it provide error setter what set error by context to hoc/withErrorWrapper.

  @param initialData {*} - the default data.
  @param initialLoading {boolean} - the default loading state.

  @returns isLoading {number} - is loading state.
  @returns setLoading {func} - set loading state.
  @returns setData {func} - set API`s data to state.
  @returns data {any} - Data from API.
  @returns setError {string} - API error.
*/
const useApiRequest = ({ initialLoading = false, initialData }) => {
  const [isLoading, setLoading] = useState(initialLoading);
  const [data, setData] = useState(initialData);
  const setError = useContext(ErrorContext);

  return {
    isLoading,
    setLoading,
    setData,
    data,
    setError,
  };
};

export default useApiRequest;
