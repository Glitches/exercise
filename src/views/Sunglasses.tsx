import React from "react";
import { Layout } from "../components/Layout";
import { useAPI } from "../hooks/fetch";
import { Card } from "../components/Card";
import { Carousel } from "../components/Carousel";
import { FakeImage } from "../components/FakeImage";
import { Title } from "../components/Title";

interface BaseItem {
  UPC: string;
  name: string;
  price: {
    current: {
      value: number;
    };
    currency: "USD";
  };
  availability: {
    stock: number;
  };
}

type ResponseMainItem = BaseItem & { variants: BaseItem[] };

export const Sunglasses: React.FC = () => {
  const { data } = useAPI<ResponseMainItem[]>(
    "https://assets.fc-dev.instore.oakley.com/assets/products/products.json"
  );

  console.log(data);

  return (
    <Layout>
      {data?.map((item, index) => (
        <Card key={`sunglasses-card-${item.UPC}`}>
          <FakeImage />
          <Title title={item.name} />
          <Carousel
            items={
              item.variants.length === 0
                ? [{ src: "BASE MODEL" }]
                : item.variants.map((variant) => ({
                    src: "PLACEHOLDER",
                  }))
            }
          />
        </Card>
      ))}
    </Layout>
  );
};
