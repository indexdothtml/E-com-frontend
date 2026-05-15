import Button from "./Button";

interface ItemCardProps {
  imageURL: string;
  heading: string;
  description: string;
  price: number;
}

function ItemCard({ imageURL, heading, description, price }: ItemCardProps) {
  return (
    <div className="w-[20rem] rounded-lg shadow-lg hover:shadow-xl">
      <div>
        <img
          src={imageURL}
          alt="Product image"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold truncate">{heading}</h1>
        <h2 className="text-sm text-black/80 font-semibold truncate">
          {description}
        </h2>
        <div className="mt-2 flex justify-between items-center">
          <div className="font-bold">{price}</div>
          <Button onclick={() => console.log("cart")}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
