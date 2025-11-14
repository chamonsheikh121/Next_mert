import Categories from "@/components/modules/home/category";
import ProductCard from "@/components/modules/home/featuredProduct/ProductCard";
import Products from "@/components/modules/products";
import CommonBanner from "@/components/ui/core/commonBanner/CommonBanner";
import { getAllCategory } from "@/services/category";
import { getAllProducts } from "@/services/product";

const ProductsPage = async() => {
    
    const {data:categories} = await getAllCategory()
    const {data:products} = await getAllProducts()

    return (
        <div>
            <CommonBanner heading=" Explore all products" subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo"/>

            {/* <Categories categories={categories} /> */}

<Products products={products}/>
            
        </div>
    );
};

export default ProductsPage;