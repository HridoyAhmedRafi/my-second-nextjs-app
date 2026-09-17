import Food from "../components/Food";

const MenuPage = async () => {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods",
  );
  const data = await res.json();

  const foods = data.data;
  console.log("food", foods);
  return (
    <div>
      <h1>Menu : {foods.length}</h1>

      <div className="grid grid-cols-4 gap-4">
        {foods.map((food) => (
          <Food food={food} key={food.id}></Food>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
