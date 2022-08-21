import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Summary from './components/Summary'
import Page404 from './components/Page404';
import Hero from './components/Hero';
import { Provider } from 'react-redux';
import { store } from './redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/page1" element={<Form1 />} />
          <Route path="/page2" element={<Form2 />} />
          <Route path="/resume" element={<Summary />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
