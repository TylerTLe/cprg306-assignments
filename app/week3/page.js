import Item from "./item";
import { items } from './item-list';

export default function Home() {
    return (
      <main className="bg-slate-950">
        <div>
            <h2 className="text-3xl font-bold m-2">Shopping List</h2>
            <ul>
            {items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
        </ul>
        </div>
      </main>
    );
  }
  