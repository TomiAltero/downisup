import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

export function ProductCard({
  id,
  name,
  price,
  image,
  hoverImage,
  hovered,
  onHover,
  onLeave,
  onAddToCart, // Acepta la función onAddToCart
}) {
  return (
    <Card className="w-96 shadow-lg hover:shadow-xl transition-shadow" variant="elevated">
      <CardHeader shadow={false} floated={false} className="h-96">
        <Image
          src={hovered ? hoverImage : image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-bold">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-100 text-base text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          onClick={() => onAddToCart({ id, name, price })} // Llama a onAddToCart
        >
          Añadir al carrito
        </Button>
      </CardFooter>
    </Card>
  );
}
