import { Landing, Error, Register, Dashboard } from "./pages";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='register' element={<Register />} />
      <Route path='landing' element={<Landing/>} />
      <Route path='*' element={<Error />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
