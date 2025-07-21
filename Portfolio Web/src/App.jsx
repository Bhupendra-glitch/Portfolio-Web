import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
       <Routr index element={<Home/>}/>
       <Route path="*" element={<NotFound/>}/>

      </Routes>
    </BrowserRouter>

    </>
  );
}

  