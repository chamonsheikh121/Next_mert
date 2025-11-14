"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { NMTable } from "@/components/ui/core/NMTable";
import { DeleteRowModal } from "@/components/ui/core/NMTable/DeleteRowModal";
import { Spinner } from "@/components/ui/spinner";
import { TProduct } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, SquarePenIcon, TableColumnsSplit } from "lucide-react";

import Link from "next/link";
import { useState } from "react";
import { CreateFlashModal } from "./CreateFlashModal";

const ManageProducts = ({ products }: { products: TProduct[] }) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  console.log(selectedProducts);
  const handleDeleteCategory = async (id: string) => {
    //    try {
    //           const res = await deleteCategory(id);
    //           console.log(res);
    //           if (res.success) {
    //             toast.success("category deleted successfully");
    //             router.refresh()
    //           } else {
    //             toast.error("failed to delete category");
    //             }
    //           } catch (error) {
    //             console.log(error);
    //         }
  };

  console.log(products);

  const columns: ColumnDef<TProduct>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(!!value);

            setTimeout(() => {
              const selectedIds = table
                .getSelectedRowModel()
                .rows.map((row) => row.original._id);
              setSelectedProducts(selectedIds);
              console.log(selectedIds);
            }, 0);
          }}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          className="border border-gray-400"
          onCheckedChange={(value) => {
            row.toggleSelected(!!value);

            // Update selectedProducts for this row
            setSelectedProducts((prev) => {
              if (value) {
                return [...prev, row.original._id];
              } else {
                return prev.filter((id) => id !== row.original._id);
              }
            });
          }}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "imageUrls",
      header: "Images",
      cell: ({ row }) => (
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 ">
          {row?.original.imageUrls.slice(0, 2).map((url: string) => (
            <Avatar key={url}>
              <AvatarImage src={url} alt="image" />

              <Spinner />
            </Avatar>
          ))}
        </div>
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <div>{row?.original.name} $</div>,
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
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => <div>{row?.original.price || 0} $</div>,
    },
    {
      accessorKey: "offerPrice",
      header: "Offered Price",
      cell: ({ row }) => <div>{parseInt(`${row?.original?.offerPrice}`) || 0} $</div>,
    },

    {
      accessorKey: "stock",
      header: "Stock",
      cell: ({ row }) => <div>{row?.original.stock || 0}</div>,
    },
    {
      accessorKey: "weight",
      header: "Weight",
      cell: ({ row }) => <div>{row?.original.weight} kg</div>,
    },

    {
      id: "actions",
      enableHiding: true,
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex items-center justify-center gap-2">
          <Button className="cursor-pointer" variant={"outline"}>
            <Eye className="text-gray-500" />
          </Button>
          <Link href={`/user/shop/products/update-product/${row.original._id}`}>
            <Button className="cursor-pointer">
              <SquarePenIcon className="text-gray-500" />
            </Button>
          </Link>
          <DeleteRowModal
            id={row.original._id}
            handleDelete={handleDeleteCategory}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Products</h1>
        <div className="flex items-center gap-5">
          <Link href={"/user/shop/products/create-product"}>
            <Button>add products</Button>
          </Link>
          <CreateFlashModal
            products={selectedProducts}
            setProducts={setSelectedProducts}
          />
        </div>
      </div>

      <NMTable data={products} columns={columns} />
    </div>
  );
};

export default ManageProducts;
