import "./App.css";
import { HashRouter, Route, Routes, useNavigate } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import IndexProducts from "./apps/online-shopping-store/products/pages/IndexProducts";
import "./css/navigation.css";
import "./css/products.css";
import "./css/card.css";
import "./css/list.css";
import "./css/input.css";
import "./css/mycart.css";
import "./css/incrementbutton.css";
import "./css/modal.css";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<IndexProducts />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
