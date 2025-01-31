import { useState, useEffect } from "react";
import { Plus, Edit, Trash2 } from "react-feather";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import styles from "./ListaProdutos.module.css";
import { buscarTodos, excluir } from "../../services/ProdutoService";

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navigate = useNavigate();

  const getProdutos = async () => {
    try {
      const response = await buscarTodos();
      const data = await response.data;
      console.log(data);
      setProdutos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const excluirProduto = async (id) => {
    try {
      await excluir(id);
      await getProdutos();
    } catch (error) {
      console.log(error);
    }
  };

  const novoProduto = () => navigate("/novo-produto");

  const editarProduto = (id) => {
    navigate(`/editar-produto/${id}`);
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="d-flex flex-grow-1">
        <SideBar collapsed={sidebarCollapsed} />
        <div className={styles.mainContent}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <button
              className="btn btn-success btn-sm d-flex align-items-center"
              onClick={novoProduto}
            >
              <Plus size={20} className="me-2" />
              Novo Produto
            </button>
          </div>
          <div className="table-container p-2" id={styles.tableContainer}>
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Valor (R$)</th>
                  <th>Descrição</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto) => (
                  <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.valor}</td>
                    <td>{produto.descricao}</td>
                    <td className={styles.acoes}>
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => editarProduto(produto.id)}
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => excluirProduto(produto.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaProdutos;
