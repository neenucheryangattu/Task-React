import logo from './logo.svg';
import './App.css';

import Headersection from './presentation/Header';
import Aboutus from './presentation/About';
import CaringTraits from './presentation/CaringTraits';
import Goalspart from './presentation/Goals';
import Corporateinfo from './presentation/CorporateInfo';
import FooterPart from './presentation/Footer';

function App() {
  return (
    <div className="App">
     <Headersection />
     <Aboutus />
     <CaringTraits />
     <Goalspart/>
     <Corporateinfo />
     <FooterPart />
    </div>                 
  );
}

export default App;
