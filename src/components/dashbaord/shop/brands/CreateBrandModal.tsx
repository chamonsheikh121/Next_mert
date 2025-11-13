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
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import { createCategory } from "@/services/category";
import { Kanban, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { createBrand } from "@/services/brand";

export function CreateBrandModal() {
  const [imageFiles, setImages] = useState<File[] | []>([]);
  const [preview, setPreview] = useState<string[] | []>([]);
  const [open, setOpen] = useState(false)

  const form = useForm({});

  // const categoryName = form.watch("categoryName")
  const {
    formState: { isSubmitting },
  } = form;
const router = useRouter()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {

    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("logo", imageFiles[0] as File);

      const res = await createBrand(formData);
      console.log(res);
      if (res?.success === true) {
        toast.success(res?.message);
        router.refresh()
        setOpen(false)

      } else {
        toast.error(res?.message);
      } 
    } catch (error) {
      console.log(error);
    }
  };

  const removeImage = (id: number) => {
    console.log(id);
    setImages((prev) => prev.filter((_, idx) => idx !== id));
    setPreview((prev) => prev.filter((_, idx) => idx !== id));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button className="cursor-pointer ">Create Brand</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] lg:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create a new Brand</DialogTitle>
            <DialogDescription>
              Create a brand for specific products
            </DialogDescription>
          </DialogHeader>

          <div className="max-w-3xl flex items-center justify-center  relative ">
            {/* Form Content */}
            <div className="w-full">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="">Brand Name</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <div className=""></div>
                            <div className="relative">
                              <Kanban className="absolute left-3 top-3 h-5 w-5 text-slate-400 group-focus-within:text-yellow-400 transition-colors duration-200" />
                              <Input
                                {...field}
                                value={field.value || ""}
                                type="text"
                                placeholder="Brand name"
                                className="pl-12 placeholder:text-slate-400 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-200 h-12 rounded-lg border-0"
                              />
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center gap-3">


                    <div className="w-[150px]">
                      {imageFiles?.length === 1 ? (
                        <ImagePreviewer
                          previewImages={preview}
                          removeImage={removeImage}
                        ></ImagePreviewer>
                      ) : (
                        <NMImageUploader
                          setImages={setImages}
                          setPreview={setPreview}
                        />
                      )}
                    </div>
                  </div>

                  <Button type="submit">{isSubmitting? "Adding...":"Add"}</Button>
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
