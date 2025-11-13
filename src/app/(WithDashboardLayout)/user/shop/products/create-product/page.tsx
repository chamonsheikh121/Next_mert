import { CreateProductForm } from "@/components/dashbaord/shop/product/CreateProductForm";
import { getAllBrands } from "@/services/brand";
import { getAllCategory } from "@/services/category";

const CreateProduct = async() => {
    
    const categories = await getAllCategory()
    const brands = await getAllBrands()

    return (
        <div>
      <CreateProductForm categories={categories?.data} brands={brands?.data}/>
        </div>
    );
};

export default CreateProduct;