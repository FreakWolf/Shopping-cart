import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import { Link, useParams } from "react-router-dom";
import productsData from "./products.json";

import image1 from "../assets/product1.png";
import image2 from "../assets/product2.png";
import image3 from "../assets/product3.png";
import image4 from "../assets/product4.png";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  const images = [
    image1,
    image2,
    image3,
    image4,
  ];
  const image = images[(product.id - 1) % images.length];

  return (
    <main className="content">
      {product && (
        <div className="product-view">
          <Link to="/">
            <h3 className="button-link d-inline-flex">
              <ArrowLeftOutlined />
              &nbsp; Back to shop
            </h3>
          </Link>
          <div className="product-modal">
            <div className="product-modal-image-wrapper">
              <img src={image} alt={product.name} />
            </div>
            <div className="product-modal-details">
              <br />
              <span className="text-subtle">{product.brand}</span>
              <h1 className="margin-top-0">{product.name}</h1>
              <span>{product.description}</span>
              <br />
              <br />
              <div className="divider" />
              <br />
              <br />
              <h1>{product.price}</h1>
              <div className="product-modal-action"></div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductDetail;
