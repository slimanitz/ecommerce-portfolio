import { useRouter } from "next/router";
import API from "../../axios";
import ProductCard from "../../components/ProductCard";
import styles from "../../styles/Products.module.css";

export async function getServerSideProps() {
  // Fetch data from external API

  const products = await API.get("/products");
  const categories = await API.get("/categories");

  return { props: { products: products.data, categories: categories.data } };
}

function Index({ products, categories }) {
  const router = useRouter();
  const renderCategories = () => {
    return categories.map(({ _id, name }) => (
      <div key={_id} className="row">
        <p className={`${styles.category} ml-5`}>{name}</p>
      </div>
    ));
  };

  const renderProducts = () => {
    return products.map((product) => (
      <ProductCard
        className="col-4 mt-3"
        key={product._id}
        _id={product._id}
        price={product.price["$numberDecimal"]}
        name={product.name}
        imgUrl={"http://localhost:8080/public/" + product.pics[0]}
      />
    ));
  };

  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <div className="row">
            <div className="col-lg-3 ">
              <div className="row">
                <p className={`${styles.title}`}>Categories</p>
              </div>
              {renderCategories()}
            </div>

            <div className="col-lg-9 ">
              <div className="row">
                <div className="col-1"></div>
                <div className="col-11">
                  <div className="row">{renderProducts()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
}

export default Index;
