import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaProdutos from "./components/ListaProdutos/ListaProdutos";
import EditarProduto from "./components/EditarProduto/EditarProduto";
import NovoProduto from "./components/NovoProduto/NovoProduto";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaProdutos />}></Route>
        <Route path="/novo-produto" element={<NovoProduto />}></Route>
        <Route
          path="/editar-produto/:id"
          element={<EditarProduto />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
