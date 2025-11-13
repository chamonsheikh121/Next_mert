import ManageBrands from "@/components/dashbaord/shop/brands";
import { getAllBrands } from "@/services/brand";

const ManageBrandsPage = async () => {
  const brands = await getAllBrands();

  return (
    <div>
      <ManageBrands brands={brands?.data} />
    </div>
  );
};

export default ManageBrandsPage;
