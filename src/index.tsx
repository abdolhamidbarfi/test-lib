import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { Suspense } from 'react';
import PanelLayout from './app/components/layouts/panel';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Loading from './app/components/layouts/loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<PanelLayout><Loading /></PanelLayout>}>
        <AppRoutes />
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Suspense>
    </BrowserRouter>
  </Provider>
);

