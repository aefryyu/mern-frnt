import {BrowserRouter, Routes, Route} from "react-router-dom";
import productList from "./component/productList";

function App() {
  return (
    <div className='container'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<productList/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
