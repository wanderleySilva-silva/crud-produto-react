import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  buscarPorId,
  editar,
} from "../../services/ProdutoService";

import styles from "./EditarProduto.module.css";

const EditarProduto = () => {

  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const getById = async (id) => {
    try {
      const response = await buscarPorId(id);
      const data = await response.data;

      setNome(data.nome);
      setValor(data.valor);
      setDescricao(data.descricao);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getById(id);
  }, [id]);

  const editarProduto = async (e) => {
    e.preventDefault();
    console.log(nome, valor, descricao);

    const produto = { nome, valor, descricao };

    try {
      await editar(id, produto);
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
             <form>
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
   
               <button type="submit" className="btn-salvar" id={styles.btnSalvar} onClick={editarProduto}>
                 Salvar
               </button>
             </form>
           </div>
         </div>
       </div>
     </div>
  );
};

export default EditarProduto;
