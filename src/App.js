// import { BrowserRouter } from 'react-router-dom';
// import { AppStoreProvider } from './store';
// import { AppThemeProvider } from './theme';
// import { AppSnackBarProvider } from './components/AppSnackBar';
// import Routes from './routes';
// import Layout from './layout';
// import { ErrorBoundary } from './components';
// import IdleTimer from './components/IdleTimer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DynamicForm from './form/DynamicForm';
import './style.scss';


/**
 * Root Application Component
 * @component App
 */
const App = () => {
  return (
    // <ErrorBoundary name="App">
    //   <AppStoreProvider>
    //     <IdleTimer />
    //     <AppThemeProvider>
    //       <AppSnackBarProvider>
    //         <BrowserRouter>
    //           <Layout>
    //             <Routes />
    //           </Layout>
    //         </BrowserRouter>
    //       </AppSnackBarProvider>
    //     </AppThemeProvider>
    //   </AppStoreProvider>
    // </ErrorBoundary>
    //

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DynamicForm />}></Route>
        <Route path="/:id" element={<DynamicForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
