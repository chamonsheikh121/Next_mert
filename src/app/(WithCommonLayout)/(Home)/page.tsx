import TopBrands from "@/components/modules/home/brands";
import Categories from "@/components/modules/home/category";
import FeaturedProducts from "@/components/modules/home/featuredProduct";
import FlashSale from "@/components/modules/home/flashSale";
import Header from "@/components/modules/home/header";
import { getAllCategory } from "@/services/category";
import { getFlashSales } from "@/services/flaseSale";
import { getAllProducts } from "@/services/product";

const HomePage = async () => {
  const { data: categories } = await getAllCategory();
  const { data: products } = await getAllProducts();
  const { data: flashProducts } = await getFlashSales();

  console.log(products);
  return (
    <div>
      <Header />
      <Categories categories={categories} />
      <FeaturedProducts products={products} />
      <TopBrands />
      <FlashSale products={flashProducts} />
    </div>
  );
};

export default HomePage;
