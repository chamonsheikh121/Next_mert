"use client"
import { CreateCategoryModal } from "./CreateCategoryModal";
import { NMTable } from "@/components/ui/core/NMTable";
import { TCategory } from "@/types/category";


import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image";

const ManageCategory = ({categories}:{categories:TCategory[]}) => {



    const columns: ColumnDef<TCategory>[] = [
         {
        accessorKey: "icon",
        header: "Icon",
        cell: ({ row }) => <div className="flex items-center gap-4"><Image className="rounded-full h-[50px] w-[50px] " src={row.getValue("icon")} alt={row.getValue("name")} width={50} height={50}/><span> {row.original.name}</span></div>
      },
      {
        accessorKey: "isActive",
        header: "Is Active",
        cell: ({ row }) => (
          <div ><span className={`p-1 rounded-b-xs ${row.getValue("isActive") ?'bg-green-200':'bg-red-200'}`}>{row.getValue("isActive") ? 'active':'inActive'}</span></div>
        ),
      },
 
    
      {
        id: "actions",
        enableHiding: true,
        header:"Actions",
        cell: ({ row }) => {
          const payment = row.original
    
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                {/* <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                  Copy payment ID
                </DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                <DropdownMenuItem>View Details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
    ]
    



    return (
        <div>
            <div className="flex items-center justify-between">
                <h1>Mange category</h1>
              <CreateCategoryModal/>
            </div>

            <NMTable columns={columns} data={categories}/>
        </div>
    );
};

export default ManageCategory;