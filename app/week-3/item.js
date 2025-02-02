// name, quantity, and category properties



export default function Item({ name, quantity, category }) {
  return (
    <section  className="bg-slate-700 m-2 p-2">
      <h2 className="font-bold text-lg text-sky-500">{name}</h2>
      <p className="ml-1">Buy {quantity} in {category}</p>
    </section>
  );
}