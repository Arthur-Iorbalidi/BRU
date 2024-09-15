import './App.scss';
import Header from './shared/Header/header';
import Footer from './shared/Footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main/Main';
import UsefullLinks from './Pages/UsefullLinks/UsefullLinks';
import Articles from './Pages/Articles/Articles';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/links" element={<UsefullLinks />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
