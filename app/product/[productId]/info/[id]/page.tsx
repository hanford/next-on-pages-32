export default async function RootPage({ params: { productId, id } }) {
  const data = await getData();

  return (
    <div>
      <h1>
        Product Info page: {productId} - {id}
      </h1>
      <div>{data.body}</div>
    </div>
  );
}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  return data;
}
