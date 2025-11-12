import { Button } from "@/components/ui/button";
import { CreateCategoryModal } from "./CreateCategoryModal";

const ManageCategory = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1>Mange category</h1>
              <CreateCategoryModal/>
            </div>
        </div>
    );
};

export default ManageCategory;