import ManageProducts from "@/components/dashbaord/shop/product";
import { getAllProducts } from "@/services/product";

const ManageProductsPage = async() => {
  const { data } = await getAllProducts();
  // console.log(data);
  return (
    <div>
      <ManageProducts products={data}/>
    </div>
  );
};

export default ManageProductsPage;
