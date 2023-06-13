import { useAtom } from "jotai";
import { CartAtom } from "./lib/store";

import { data } from "./data.json";

const App = () => {
  return (
    <div className="border-4 border-violet-500 bg-[#171717] text-white min-h-screen flex flex-col pt-12 px-10">
      <h1 className="text-5xl font-bold tracking-wider">Items</h1>
      <div className="flex flex-row mt-16 space-x-12">
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

const Card = (props: {
  id: number;
  name: string;
  price: number;
  description: string;
  onClick?: () => void;
}) => {
  const { id, name, price, description } = props;
  const [cart, setCart] = useAtom(CartAtom);
  return (
    <div className="w-80 flex flex-col space-y-4 shadow-lg bg-[#111111] py-6 px-5 border-2 border-[#1e1e1e]">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <h3 className="text-xl">$ {price}</h3>
      <p>{description}</p>
      <button
        onClick={() => setCart([...cart, props])}
        className="w-40 bg-[#1e1e1e] p-2"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default App;
