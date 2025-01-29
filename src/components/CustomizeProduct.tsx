"use client";

import { useEffect, useState } from "react";
import Add from "./Add";

type ProductOption = {
  name: string;
  choices: { description: string; value?: string }[];
};

type Variant = {
  _id: string;
  choices: { [key: string]: string };
  stock: { inStock: boolean; quantity: number };
};

const CustomizeProducts = () => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [selectedVariant, setSelectedVariant] = useState<Variant | undefined>();

  // Static mock data for product options and variants
  const productOptions: ProductOption[] = [
    {
      name: "Color",
      choices: [
        { description: "Red", value: "#FF0000" },
        { description: "Blue", value: "#0000FF" },
        { description: "Green", value: "#00FF00" },
      ],
    },
    {
      name: "Size",
      choices: [
        { description: "Small" },
        { description: "Medium" },
        { description: "Large" },
      ],
    },
  ];

  const variants: Variant[] = [
    {
      _id: "variant-1",
      choices: { Color: "Red", Size: "Small" },
      stock: { inStock: true, quantity: 5 },
    },
    {
      _id: "variant-2",
      choices: { Color: "Blue", Size: "Medium" },
      stock: { inStock: true, quantity: 2 },
    },
    {
      _id: "variant-3",
      choices: { Color: "Green", Size: "Large" },
      stock: { inStock: false, quantity: 0 },
    },
  ];

  useEffect(() => {
    const variant = variants.find((v) =>
      Object.entries(selectedOptions).every(([key, value]) => v.choices[key] === value)
    );
    setSelectedVariant(variant);
  }, [selectedOptions]); // ✅ Only re-run when selectedOptions changes
  

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      return (
        Object.entries(choices).every(
          ([key, value]) => variant.choices[key] === value
        ) &&
        variant.stock.inStock &&
        variant.stock.quantity > 0
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name]: choice.description,
              });

              const selected =
                selectedOptions[option.name] === choice.description;

              const clickHandler = disabled
                ? undefined
                : () => handleOptionSelect(option.name, choice.description);

              return option.name === "Color" ? (
                <li
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                  key={choice.description}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </li>
              ) : (
                <li
                  className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm"
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disabled
                      ? "#FBCFE8"
                      : "white",
                    color: selected || disabled ? "white" : "#f35c7a",
                  }}
                  key={choice.description}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <Add
        productId="1"
        variantId={selectedVariant?._id || "00000000-0000-0000-0000-000000000000"}
        stockNumber={selectedVariant?.stock.quantity || 0}
      />
    </div>
  );
};

export default CustomizeProducts;
