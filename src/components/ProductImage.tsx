"use client";

import Image from "next/image";
import { useState } from "react";

const ProductImages = ({
  items,
}: {
  items: { _id?: string; image?: { url?: string } }[];
}) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={
            items[index]?.image?.url ||
            "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          }
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map(
          (item: { _id?: string; image?: { url?: string } }, i: number) => (
            <div
              className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
              key={item._id}
              onClick={() => setIndex(i)}
            >
              <Image
                src={
                  item.image?.url ||
                  "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                }
                alt=""
                fill
                sizes="30vw"
                className="object-cover rounded-md"
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default ProductImages;
