import Image from "next/image";
import { X } from "lucide-react";

const ImagePreviewer = ({
  previewImages,
  removeImage,
}: {
  previewImages: string[];
  removeImage: (id: number) => void;
}) => {
  console.log("previewImages", previewImages);

  return (
    <div className="flex flex-wrap gap-3">
      {previewImages?.map((img, index) => (
        <div
          key={index}
          className="relative group w-40 h-20 rounded-lg overflow-hidden"
        >
          <Image
            src={img}
            alt="preview image"
            fill
            className="object-contain rounded-lg"
          />

          {/* Overlay + delete icon (visible on hover) */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={() => removeImage(index)}
              className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagePreviewer;
