import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import store from './Store/Store';
import Cart from './Components/Cart';

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Home />
        <Cart />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
