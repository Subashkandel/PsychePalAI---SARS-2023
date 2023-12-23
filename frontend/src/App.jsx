import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MyPrompts from "./components/MyPrompts";
import Trash from "./Trash";

function App() {
  return (
    <div className="App flex w-full h-screen">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/">
            <Route index element={<MyPrompts />} />
            <Route path="trash" element={<Trash />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
