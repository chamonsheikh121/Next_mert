import { UpdateProductForm } from "@/components/dashbaord/shop/product/UdateProductForm";
import { getProduct } from "@/services/product";

const UpdateProduct = async ({ params }: { params: { productId: string } }) => {
  const { productId } = await params;
const {data:product} = await getProduct(productId);
console.log(product); 
  return <div>

<UpdateProductForm product={product}/>

  </div>;
};

export default UpdateProduct;
