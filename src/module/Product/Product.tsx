import * as React from "react";
import ProductBaneer from "./ProductBanner";
import WhyChooseUsProduct from "./WhyChooseProduct";
import BookDemo from "./BookDemo";
import Student from "./Student";
import Parent from "./Parents";
import FeaturedCard from "../about/FeaturedCard";

const Product = () => {
  return (
    <div>
      <ProductBaneer />
      <WhyChooseUsProduct />
      <BookDemo/>
      <Parent />
      <Student/>
    </div>
  );
};

export default Product;
