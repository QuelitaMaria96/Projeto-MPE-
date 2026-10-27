function ProdutoCard({ nome, preco, categoria }) {
  return (
    <div className="produto-card">
      <h3>{nome}</h3>
      <p>Preço: R$ {preco}</p>
      <p>Categoria: {categoria}</p>
    </div>
  );
}

export default ProdutoCard;