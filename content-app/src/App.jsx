import './App.css';

function Content() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      desc: "Product 1 description",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      desc: "Product 2 description",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      desc: "Product 3 description",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Product 4",
      desc: "Product 4 description",
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <main>
      <h1>Product List</h1>
      <ul className="content">
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <img src={product.img} alt={product.name} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Content;
