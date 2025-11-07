"use client";

import { Button } from "@/components/ui/button";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Store,
  FileText,
  MapPin,
  Phone,
  Calendar,
  Globe,
  CreditCard,
  Settings,
  Share2,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { createShopSchema } from "./CreateFormValidation";
import { createShop } from "@/services/shop";
import { toast } from "sonner";

const CreateShopForm = () => {
  const [imageFiles, setImages] = useState<File[] | []>([]);
  const [preview, setPreview] = useState<string[] | []>([]);
  const form = useForm({
    resolver: zodResolver(createShopSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const handleCreateShop: SubmitHandler<FieldValues> = async (data) => {
    const refinedData = {
      ...data,
      establishedYear: Number(data.establishedYear),
    };
    console.log(refinedData);

    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(refinedData));
      formData.append("logo", imageFiles[0] as File);

      const res = await createShop(formData);
      if (res?.success == true) {
        toast.success("Shop Created Successfully");
      } else {
        toast.error("Something went wrong ! failed");
      }
      console.log(res)
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
    <div className="p-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleCreateShop)}
          className="space-y-6"
        >
          {/* Shop Name & Business License */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="shopName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Store className="h-4 w-4 text-blue-600" />
                    Shop Name
                  </FormLabel>
                  <FormControl>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300"></div>
                      <Input
                        {...field}
                        placeholder="Tech Solutions Inc"
                        value={field.value || ""}
                        className="relative bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 h-12 rounded-lg border"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessLicenseNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-600" />
                    Business License
                  </FormLabel>
                  <FormControl>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300"></div>
                      <Input
                        {...field}
                        placeholder="BSN-1234567890"
                        value={field.value || ""}
                        className="relative bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 h-12 rounded-lg border"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />
          </div>

          {/* Address & Contact */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  Business Address
                </FormLabel>
                <FormControl>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300"></div>
                    <Input
                      {...field}
                      placeholder="123 Business Street, City, State"
                      value={field.value || ""}
                      className="relative bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 h-12 rounded-lg border"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-red-500 text-xs" />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    Contact Number
                  </FormLabel>
                  <FormControl>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300"></div>
                      <Input
                        {...field}
                        placeholder="+1-234-567-8900"
                        value={field.value || ""}
                        className="relative bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 h-12 rounded-lg border"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="establishedYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    Established Year
                  </FormLabel>
                  <FormControl>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300"></div>
                      <Input
                        {...field}
                        type="number"
                        placeholder="2020"
                        value={field.value || ""}
                        className="relative bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 h-12 rounded-lg border"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />
          </div>

          {/* Website & Tax ID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-blue-600" />
                    Website
                  </FormLabel>
                  <FormControl>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300"></div>
                      <Input
                        {...field}
                        placeholder="https://example.com"
                        value={field.value || ""}
                        className="relative bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 h-12 rounded-lg border"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="taxIdentificationNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-blue-600" />
                    Tax ID Number
                  </FormLabel>
                  <FormControl>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300"></div>
                      <Input
                        {...field}
                        placeholder="TIN-123456789"
                        value={field.value || ""}
                        className="relative bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 h-12 rounded-lg border"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Share2 className="h-4 w-4 text-blue-600" />
              Social Media Links
            </FormLabel>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="socialMediaLinks.facebook"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300"></div>
                        <Input
                          {...field}
                          value={field.value || ""}
                          placeholder="Facebook URL"
                          className="relative bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 h-12 rounded-lg border"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="socialMediaLinks.twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300"></div>
                        <Input
                          {...field}
                          placeholder="Twitter URL"
                          value={field.value || ""}
                          className="relative bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 h-12 rounded-lg border"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="socialMediaLinks.instagram"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300"></div>
                        <Input
                          {...field}
                          placeholder="Instagram URL"
                          value={field.value || ""}
                          className="relative bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 h-12 rounded-lg border"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Services Offered */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="servicesOffered"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 flex-1 gap-2">
                      <Settings className="h-4 w-4 text-blue-600" />
                      Services Offered
                    </FormLabel>
                    <FormControl>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300"></div>
                        <Textarea
                          {...field}
                          value={
                            Array.isArray(field.value)
                              ? field.value.join(", ")
                              : field.value
                          }
                          onChange={(e) =>
                            field.onChange(
                              e.target.value.split(",").map((s) => s.trim())
                            )
                          }
                          placeholder="Service 1, Service 2, Service 3"
                          className="relative bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 min-h-20 rounded-lg border resize-none"
                        />
                      </div>
                    </FormControl>
                    <FormDescription className="text-gray-500 text-xs">
                      Separate services with commas
                    </FormDescription>
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
          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25 border border-blue-500/20 hover:border-blue-400/30 text-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                Creating Shop...
              </div>
            ) : (
              "Create Shop"
            )}
          </Button>
        </form>
      </Form>

      {/* Additional Info */}
      <div className="text-center mt-6">
        <p className="text-xs text-gray-500">
          By creating a shop, you agree to our{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-500 transition-colors duration-200"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-500 transition-colors duration-200"
          >
            Business Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default CreateShopForm;
