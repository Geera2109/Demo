import Feed from "./Feed";
import Hom from "./Hom";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Project from "./Project";







function App() {
  return (
    <div>
      {/* <Hom />
      <BrowserRouter>
        <Routes>
          <Route exact path='/Hom' element={<Hom />} />
          <Route path='/feed' element={<Feed />}
          />
        </Routes>
      </BrowserRouter> */}

      <Project/>
    </div>
  );
}

export default App;