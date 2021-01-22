import { Provider } from 'react-redux';
import 'reset-css/reset.css';
import P from 'prop-types';
import { withErrorWrapper } from 'hoc';

import 'styles/globals.css';
import 'styles/ui.sass';
import store from 'store/index';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.propTypes = {
  Component: P.func.isRequired,
  pageProps: P.object.isRequired,
};

export default withErrorWrapper(MyApp);
