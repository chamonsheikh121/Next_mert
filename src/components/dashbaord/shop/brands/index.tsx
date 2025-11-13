"use client"
import { TBrand } from "@/types/Brand";
import { CreateBrandModal } from "./CreateBrandModal";
import { NMTable } from "@/components/ui/core/NMTable";
import { DeleteRowModal } from "@/components/ui/core/NMTable/DeleteRowModal";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { deleteBrand } from "@/services/brand";

const ManageBrands = ({ brands }: { brands: TBrand[] }) => {

    const router = useRouter()

  const handleDeleteBrand = async(id: string) => {
   try {
          const res = await deleteBrand(id);
          console.log(res);
          if (res.success) {
            toast.success(res?.message);
            router.refresh()
          } else {
            toast.error("failed to delete brand");
            }
          } catch (error) {
            console.log(error);
        }
  };


 const columns: ColumnDef<TBrand>[] = [
    {
      accessorKey: "logo",
      header: "Logo",
      cell: ({ row }) => (
        <div className="flex items-center gap-4">
          <Image
            className="rounded-full object-cover h-[50px] w-[50px] "
            src={row.getValue("logo")}
            alt={row.getValue("name")}
            width={50}
            height={50}
          />
          <span> {row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "isActive",
      header: "Is Active",
      cell: ({ row }) => (
        <div>
          <span
            className={`p-1 rounded-b-xs ${
              row.getValue("isActive") ? "bg-green-200" : "bg-red-200"
            }`}
          >
            {row.getValue("isActive") ? "active" : "inActive"}
          </span>
        </div>
      ),
    },

    {
      id: "actions",
      enableHiding: true,
      header: "Actions",
      cell: ({ row }) => <DeleteRowModal id={row.original._id} handleDelete={handleDeleteBrand}/>,
    },
  ];


  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Brands</h1>
        <CreateBrandModal />
      </div>
        <NMTable data={brands} columns={columns}/>
    </div>
  );
};

export default ManageBrands;
