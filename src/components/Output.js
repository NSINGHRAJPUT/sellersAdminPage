const Output = (props) => {
  return (
    <ul>
      {props.obj.map((item) => {
        return (
          <li>
            {item.id}-{item.name}-{item.price}
            <button value={item.id} onClick={props.onSelect}>
              Delete Product
            </button>
          </li>
        );
      })}
      Total Expense:{props.totalPrice}
    </ul>
  );
};
export default Output;
