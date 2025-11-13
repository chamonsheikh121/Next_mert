"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Controller,
  FieldValues,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { TCategory } from "@/types";
import { TBrand } from "@/types/Brand";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import { useState } from "react";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
import { Plus } from "lucide-react";
import { createProduct } from "@/services/product";
import { useRouter } from "next/navigation";
export function CreateProductForm({
  categories,
  brands,
}: {
  categories: TCategory[];
  brands: TBrand[];
}) {
  const [imageFiles, setImages] = useState<File[] | []>([]);
  const [preview, setPreview] = useState<string[] | []>([]);

  const router = useRouter()

  const form = useForm({
    defaultValues: {
      name: "Lenovo XPS 15 Laptop",
      description:
        "The Lenovo XPS 13 is a high-performance laptop with a sleek design, perfect for work and play.",
      price: 120455,
      stock: 50,
      weight: 1.24,
      category: "",
      brand: "",
      specification: [{ key: "", value: "" }],
      keyFeature: [{ value: "" }],
      availableColors: [{ value: "" }],
    },
  });

  const { append: appendColor, fields: colorFields } = useFieldArray({
    control: form.control,
    name: "availableColors",
  });

  const { append: appendKeyFeature, fields: keyFeatureFields } = useFieldArray({
    control: form.control,
    name: "keyFeature",
  });
  const { append: addSpecification, fields: specificationFields } =
    useFieldArray({
      control: form.control,
      name: "specification",
    });
  const handleAddKeyFeature = () => {
    appendKeyFeature({ value: "" });
  };
  const handleAddColor = () => {
    appendColor({ value: "" });
  };
  const handleAddSpecification = () => {
    addSpecification({ key: "", value: "" });
  };

  console.log(specificationFields);

  const categoryOptions = categories?.map((category) => ({
    name: category?.name,
    value: category?._id,
  }));
  const brandOptions = brands?.map((brand) => ({
    name: brand?.name,
    value: brand?._id,
  }));

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(data: FieldValues) {
    const specification: Record<string, string> = {};

    const availableColors = data?.availableColors?.map(
      (color: { value: string }) => color.value
    );
    const keyFeatures = data?.keyFeature?.map(
      (feature: { value: string }) => feature.value
    );
    data?.specification?.forEach(
      (spec: { key: string; value: string }) =>
        (specification[spec?.key] = spec.value)
    );

    const cleanData = {
      ...data,
      specification: specification,
      availableColors: availableColors,
      keyFeature: keyFeatures,
      price: Number(data?.price),
      weight: Number(data?.weight),
      stock: Number(data?.stock),
    };

    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(cleanData));
      imageFiles?.forEach((file) => {
        formData.append("images", file);
      });

      const res = await createProduct(formData);
      if (res?.success) {
        toast.success(res.message);
        form.reset()
        router.push('/user/shop/products')
      } else {
        toast.error(res.error);
      }

      console.log(res);

    } catch (error) {
      console.log(error);
    }
  }

  const removeImage = (id: number) => {
    console.log(id);
    setImages((prev) => prev.filter((_, idx) => idx !== id));
    setPreview((prev) => prev.filter((_, idx) => idx !== id));
  };

  return (
    <Card className="lg:max-w-3xl mx-auto sm:max-w-md">
      <CardHeader>
        <CardTitle>Create a new Product</CardTitle>
        <CardDescription>
          create a new product to your shop with the product details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Product name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Product name"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Description
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="form-rhf-demo-description"
                      placeholder="Product description"
                      rows={6}
                      value={field.value || ""}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      {/* <InputGroupText className="tabular-nums">
                        {field.value.length}/100 characters
                      </InputGroupText> */}
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    Include steps to reproduce, expected behavior, and what
                    actually happened.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <NMImageUploader setImages={setImages} setPreview={setPreview} />
            <ImagePreviewer previewImages={preview} removeImage={removeImage} />

            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              <Controller
                name="price"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Product Price
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="Price"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="stock"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Product Stock
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="Stock"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <div className="relative">
                <Controller
                  name="weight"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-title">
                        Product weight
                      </FieldLabel>
                      <Input
                        {...field}
                        id="form-rhf-demo-title"
                        aria-invalid={fieldState.invalid}
                        placeholder="eg: 1kg"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <span className="absolute right-5 top-9">kg</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full ">
              <Controller
                name="brand"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="w-full">
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Select Brand
                    </FieldLabel>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger
                        id="form-rhf-select-language"
                        aria-invalid={fieldState.invalid}
                        className="w-full border "
                      >
                        <SelectValue placeholder="Select a brand" />
                      </SelectTrigger>
                      <SelectContent position="item-aligned">
                        <SelectSeparator />
                        {brandOptions.map((brand) => (
                          <SelectItem key={brand.value} value={brand.value}>
                            {brand.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              />
              <Controller
                name="category"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="w-full">
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Select Category
                    </FieldLabel>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger
                        id="form-rhf-select-language"
                        aria-invalid={fieldState.invalid}
                        className="block w-full "
                      >
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>

                      <SelectContent position="item-aligned">
                        <SelectSeparator />
                        {categoryOptions.map((category) => (
                          <SelectItem
                            key={category.value}
                            value={category.value}
                          >
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              />
            </div>

            <div className="flex bg-gray-200 p-2 rounded-sm items-center justify-between">
              <h1>Available Colors</h1>
              <Button
                onClick={handleAddColor}
                type="button"
                className="cursor-pointer"
              >
                <Plus />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {colorFields?.map((fieldValue, index) => (
                <Controller
                  key={fieldValue?.id}
                  name={`availableColors.${index}.value`}
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-title">
                        {`color ${index + 1}`}
                      </FieldLabel>
                      <Input
                        {...field}
                        id="form-rhf-demo-title"
                        aria-invalid={fieldState.invalid}
                        placeholder="Color"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              ))}
            </div>
            <div className="flex bg-gray-200 p-2 rounded-sm items-center justify-between">
              <h1>Key Features</h1>
              <Button
                onClick={handleAddKeyFeature}
                type="button"
                className="cursor-pointer"
              >
                <Plus />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {keyFeatureFields?.map((fieldValue, index) => (
                <Controller
                  key={fieldValue?.id}
                  name={`keyFeature.${index}.value`}
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-title">
                        {`Feature ${index + 1}`}
                      </FieldLabel>
                      <Input
                        {...field}
                        id="form-rhf-demo-title"
                        aria-invalid={fieldState.invalid}
                        placeholder="add feature"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              ))}
            </div>
            <div className="flex bg-gray-200 p-2 rounded-sm items-center justify-between">
              <h1>Specifications</h1>
              <Button
                onClick={handleAddSpecification}
                type="button"
                className="cursor-pointer"
              >
                <Plus />
              </Button>
            </div>
            <div>
              {specificationFields?.map((specification, index) => (
                <div key={specification.id} className="grid grid-cols-2 gap-4">
                  <Controller
                    name={`specification.${index}.key`}
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="form-rhf-demo-title">
                          {`specification ${index + 1} name`}
                        </FieldLabel>
                        <Input
                          {...field}
                          id="form-rhf-demo-title"
                          aria-invalid={fieldState.invalid}
                          placeholder="specification"
                          autoComplete="off"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name={`specification.${index}.value`}
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="form-rhf-demo-title">
                          {`specification ${index + 1} value`}
                        </FieldLabel>
                        <Input
                          {...field}
                          id="form-rhf-demo-title"
                          aria-invalid={fieldState.invalid}
                          placeholder="specification"
                          autoComplete="off"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>
              ))}
            </div>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="destructive" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo">
            {isSubmitting ? "Creating..." : "Create"}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
