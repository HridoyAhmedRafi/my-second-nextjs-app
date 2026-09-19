import Image from "next/image";
import Link from "next/link";

const Food = ({ food }) => {
  const { dish_name, rating, price, image_link } = food;

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{dish_name}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
      </div>
      <figure>
        <Image
          src={image_link}
          alt="Food Image"
          width={400}
          height={400}
        ></Image>
      </figure>

      <Link href={`/menu/${food.id}`}>
        <button className="btn btn-neutral m-4">Details</button>

      </Link>
    </div>
  );
};

export default Food;
