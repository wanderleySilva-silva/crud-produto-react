import { useState } from "react";
import { salvar } from "../../services/ProdutoService";
import { useNavigate } from "react-router-dom";
import styles from "./NovoProduto.module.css";

const NovoProduto = () => {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  const navigate = useNavigate();

  const criarProduto = async (e) => {
    e.preventDefault();
    console.log(nome, valor, descricao);

    const produto = { nome, valor, descricao };

    try {
      await salvar(produto);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.body}>
    <div className="container" id={styles.container}>
      <div className="form-container" id={styles.formContainer}>
        {/* Card do título */}
        <div className={styles.cardTitulo}>
          <div className={styles.cardBodyTitulo}>
            <h2>Novo Produto</h2>
          </div>
        </div>

        {/* Card do formulário */}
        <div className="card-form" id={styles.cardForm}>
          <form onSubmit={criarProduto}>
            <div className="form-group" id={styles.formGroup}>
              <label className="form-label" id={styles.formLabel}>Nome</label>
              <input
                type="text"
                className="form-control" id={styles.formControl}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="form-group" id={styles.formGroup}>
              <label className="form-label" id={styles.formLabel}>Valor</label>
              <input
                type="number"
                className="form-control" id={styles.formControl}
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </div>

            <div className="form-group" id={styles.formGroup}>
              <label className="form-label" id={styles.formLabel}>Descrição</label>
              <input
                type="text"
                className="form-control" id={styles.formControl}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-salvar" id={styles.btnSalvar}>
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
};

export default NovoProduto;
