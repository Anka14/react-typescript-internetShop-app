import React from "react";
import { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import ErrorMassage from "./ErrorMassage";

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    if (value.trim().length === 0) {
      setError("Please enter title");
      return;
    }

    productData.title = value;
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    onCreate(response.data);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border w-full px-4 py-2 mb-2 "
        placeholder="Enter product title"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {error && <ErrorMassage error={error} />}
      <button
        type="submit"
        className="bg-yellow-400 px-4 py-2 rounded outline-0 hover:text-white"
      >
        Create
      </button>
    </form>
  );
};

export default CreateProduct;
