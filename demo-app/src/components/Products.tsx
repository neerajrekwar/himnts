'use client'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function Products() {
  const list = [
    {
      title: "Joyful",
      img: "/images/1.jpg",
      price: "$5.50",
    },
    {
      title: "Delight",
      img: "/images/2.jpg",
      price: "$3.00",
    },
    {
      title: "Extravaganza",
      img: "/images/3.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/4.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/5.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/6.jpg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/7.jpg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/8.jpg",
      price: "$12.20",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        /* eslint-disable no-console */
        <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-[33rem] object-cover h-[220px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
