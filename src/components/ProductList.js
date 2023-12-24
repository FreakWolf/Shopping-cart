import bannerImg from "../assets/banner-girl.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./ProductList.css";
import { Link, useNavigate } from "react-router-dom";
import productsData from "./products.json";

import image1 from "../assets/product1.png";
import image2 from "../assets/product2.png";
import image3 from "../assets/product3.png";
import image4 from "../assets/product4.png";

const ProductList = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>See</strong>
              &nbsp;everything with&nbsp;
              <strong>Clarity</strong>
            </h1>
            <p>
              Buying eyewear should leave you happy and good-looking, with money
              in your pocket. Glasses, sunglasses, and contacts—we’ve got your
              eyes covered.
            </p>
            <br />
            <Link to="" className="button">
              Shop Now &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Featured Products</h1>
          </div>
          <div className="product-display-grid">
            {productsData.map((product, index) => (
              <div
                className="product-display"
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                style={{ cursor: "pointer" }}
              >
                <div className="product-display-img">
                  {/* Use an array of images and select the image based on the index */}
                  <img
                    className="product-card-img is-img-loaded"
                    src={[image1, image2, image3, image4][index % 4]}
                    alt={product.name}
                  />
                </div>
                <div className="product-display-details">
                  <h2>{product.name}</h2>
                  <p className="text-subtle text-italic">{product.subtle}</p>
                </div>
                <Link to={`/product/${product.id}`}></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductList;
