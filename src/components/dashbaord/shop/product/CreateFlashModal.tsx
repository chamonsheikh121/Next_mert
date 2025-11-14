"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { DollarSign } from "lucide-react";
import { createFlashSale } from "@/services/flaseSale";

export function CreateFlashModal({ products, setProducts }: { products: string[], setProducts: Dispatch<SetStateAction<string[]>> }) {
  const [open, setOpen] = useState(false);
  const form = useForm({});

  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
   
    try {
    
        const refinedData = {
            ...data,
            products,
            discountPercentage: parseInt(data?.discountPercentage)
        }


      const res = await createFlashSale(refinedData);
      console.log(res);
      if (res?.success === true) {
        toast.success(res?.message);
        setProducts([])
        setOpen(false)
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button
            disabled={products?.length ? false : true}
            className="cursor-pointer "
          >
            Flash Sell
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] lg:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Add product to the Flash sell</DialogTitle>
            <DialogDescription>
              Flash sell for specific products
            </DialogDescription>
          </DialogHeader>

          <div className="max-w-2xl flex items-center justify-center  relative ">
            {/* Form Content */}
            <div className="w-full">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="relative">
                    <FormField
                      control={form.control}
                      name="discountPercentage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="">Discount</FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <div className=""></div>
                              <div className="relative">
                                <DollarSign className="absolute left-3 top-3 h-5 w-5 text-slate-400 group-focus-within:text-yellow-400 transition-colors duration-200" />
                                <Input
                                  {...field}
                                  value={field.value || ""}
                                  type="text"
                                  placeholder="discount by percentage"
                                  className="pl-12 placeholder:text-slate-400 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-200 h-12 rounded-lg border-0"
                                />
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )}
                    />
                    <span className="absolute right-5 top-9">%</span>
                  </div>

                  <Button type="submit">
                    {isSubmitting ? "Adding..." : "Add"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="destructive">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
