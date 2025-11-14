// components/Pagination.tsx
"use client";

import { useEffect, useState } from "react";
import { Button } from "../../button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Pagination = ({ totalPage }: { totalPage: number }) => {
  const [currentPage, setCurrentPage] = useState(1);

console.log(totalPage);

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
    router.push(`?page=${currentPage}`);
  }, [currentPage, router]);

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
    </div>
  );
};

export default Pagination;
