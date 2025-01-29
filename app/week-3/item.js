// name, quantity, and category properties

function Name(props) {
  return <h2>{props.name}</h2>;
}

function Quantity(props) {
    return <p>Quantity: {props.quantity}</p>;
}

function Category(props) {
    return <p>Category: {props.category}</p>;
}


export default function Item() {
  return (
    <div>
      <Name
    </div>
  );
}