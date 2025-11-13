
import ManageCategory from "@/components/dashbaord/shop/category";
import { getAllCategory } from "@/services/category";


const ProductCategoryPage = async() => {
    
    const data = await getAllCategory()


    return (
        <div>
            <ManageCategory categories={data?.data}/>
          
        </div>
    );
}

export default ProductCategoryPage;