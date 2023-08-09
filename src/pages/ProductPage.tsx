import React from "react";
//import {products} from "../src/data/products"

import { useContext } from "react";

import CreateProduct from "../components/CreateProduct";
import ErrorMassage from "../components/ErrorMassage";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Product from "../components/Product";
import { useProducts } from "../hooks/Products";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalCotext";

const ProductPage = () => {
  const { loading, error, products, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMassage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      {/* <Product product={products[0]}/>
  <Product product={products[1]}/> */}
      {modal && (
        <Modal title="Create new Product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={open}
      >
        +
      </button>
    </div>
  );
};

export default ProductPage;
