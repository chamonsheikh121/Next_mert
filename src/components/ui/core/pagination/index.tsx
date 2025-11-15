// components/Pagination.tsx
"use client";

import { useEffect, useState } from "react";
import { Button } from "../../button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "../../input";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Field, FieldError, FieldGroup, } from "../../field";

const Pagination = ({ totalPage }: { totalPage: number }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10)
  const form = useForm();

  console.log(totalPage);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const pageNumber = parseInt(data?.jumpTo);
    setLimit(pageNumber);
  };

  const router = useRouter();
  const handleBefore = () => {
    if (currentPage >= 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleAfter = () => {
    if (currentPage <= totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    router.push(`?page=${currentPage}&limit=${limit}`);
  }, [currentPage, router, limit]);

  return (
    <div className="flex items-center justify-end space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => handleBefore()}
        disabled={currentPage === 1}
        className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <ArrowLeft />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {[...Array(totalPage)].map((_, index) => {
          return (
            <Button
              onClick={() => setCurrentPage(index + 1)}
              variant={currentPage === index + 1 ? "default" : "outline"}
              key={index}
            >
              {" "}
              {index + 1}
            </Button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handleAfter()}
        disabled={currentPage === totalPage}
        className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <ArrowRight />
      </button>
      <div className="space-y-2 flex flex-col">
        <form
          className="flex flex-col items-center   gap-2"
          id="form-rhf-demo"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <Controller
              name="jumpTo"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="eg:23"
                    autoComplete="off"
                    className="border border-gray-300"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <Button>Submit</Button>
        </form>
      </div>
      {/* <div className="flex items-center">
        <Input className="border border-gray-300 w-14"/>
        <Button>Submit</Button>
      </div> */}
    </div>
  );
};

export default Pagination;
