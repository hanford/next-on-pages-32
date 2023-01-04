export default function RootPage({ params: { productId, id } }) {
  return (
    <div>
      <h1>
        Product Info page: {productId} - {id}
      </h1>
    </div>
  );
}
