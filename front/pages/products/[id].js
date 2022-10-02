import { useRouter } from "next/router";

function ProductId() {
  const router = useRouter();
  return (
    <div className="container-fluid">
      <h1>{router.query.id}</h1>
    </div>
  );
}

export default ProductId;
