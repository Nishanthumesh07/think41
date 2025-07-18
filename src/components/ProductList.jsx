const ProductList = ({ products }) => {
  return (
    <div>
      {products.length === 0 ? (
        <p>No products match the filters.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id} className="border p-2 mb-2 rounded">
              <strong>{product.name}</strong><br />
              Category: {product.category} | Brand: {product.brand} | Price: ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
