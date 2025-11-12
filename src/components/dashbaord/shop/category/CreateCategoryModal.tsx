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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlignVerticalDistributeStartIcon,
  Eye,
  EyeOff,
  Icon,
  Kanban,
  Lock,
  Mail,
  Settings,
  Shield,
  Type,
  User,
} from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import { createCategory } from "@/services/category";

export function CreateCategoryModal() {
  const [imageFiles, setImages] = useState<File[] | []>([]);
  const [preview, setPreview] = useState<string[] | []>([]);

  const form = useForm({});

  // const categoryName = form.watch("categoryName")
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("icon", imageFiles[0] as File);

      const res = await createCategory(formData);
      console.log(res);
      if (res?.success === true) {
        toast.success(res?.message);
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
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="cursor-pointer ">Create Category</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] lg:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create Category</DialogTitle>
            <DialogDescription>
              Create a category for specific products
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
                        <FormLabel className="">Category Name</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <div className=""></div>
                            <div className="relative">
                              <Kanban className="absolute left-3 top-3 h-5 w-5 text-slate-400 group-focus-within:text-yellow-400 transition-colors duration-200" />
                              <Input
                                {...field}
                                value={field.value || ""}
                                type="text"
                                placeholder="category"
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
                    <div className="flex-1">
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-gray-700 flex-1 gap-2">
                              <Settings className="h-4 w-4 text-blue-600" />
                              description
                            </FormLabel>
                            <FormControl>
                              <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300"></div>
                                <Textarea
                                  {...field}
                                  value={field.value || ""}
                                  placeholder="description"
                                  className="relative bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 min-h-20 rounded-lg border resize-none"
                                />
                              </div>
                            </FormControl>

                            <FormMessage className="text-red-500 text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>

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

                  <Button type="submit">Save changes</Button>
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
