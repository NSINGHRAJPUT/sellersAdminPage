import { useState } from "react";
import "./Input.css";
import Output from "./Output";

let data = [];
let amount = 0;
const Input = () => {
  let name, id, price, obj;
  const [iPrice, setIPrice] = useState(amount);
  const [dta, setDta] = useState(data);

  const idHandler = (e) => {
    id = e.target.value;
  };
  const priceHandler = (e) => {
    price = e.target.value;
  };
  const nameHandler = (e) => {
    name = e.target.value;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setIPrice(parseInt(iPrice) + parseInt(price));
    obj = {
      id: `${id}`,
      name: `${name}`,
      price: `${price}`,
    };

    localStorage.setItem(id, JSON.stringify(obj));
    setDta((preData) => {
      return [obj, ...preData];
    });
  };

  const deleteHandler = (e) => {
    let deleteId = e.target.value;
    localStorage.removeItem(deleteId);
    setIPrice(iPrice - dta[deleteId].price);
    setDta((preData) => {
      const newData = preData.filter((goal) => goal.id !== deleteId);
      return newData;
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="container">
        <label>ID</label>
        <input
          type="number"
          onChange={idHandler}
          className="input-field"
        ></input>
        <label>Price</label>
        <input
          type="number"
          onChange={priceHandler}
          className="input-field"
        ></input>
        <label>Product Name</label>
        <input
          type="text"
          onChange={nameHandler}
          className="input-field"
        ></input>
        <input
          type="submit"
          className="input-button"
          value="Add Product"
        ></input>
      </form>
      <Output obj={dta} totalPrice={iPrice} onSelect={deleteHandler} />
    </div>
  );
};

export default Input;
