import { Button } from "@/components/ui/button";
import Link from "next/link";

const ManageProducts = () => {
    return (
        <div>
           <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Manage Products</h1>
            <Link href={"/user/shop/products/create-product"}> <Button>add products</Button></Link>
           </div>
        </div>
    );
};

export default ManageProducts;