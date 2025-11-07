import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

type TImageUploader = {
  setImages: Dispatch<SetStateAction<[] | File[]>>;
  setPreview: Dispatch<SetStateAction<[] | string[]>>;
};

const NMImageUploader = ({ setImages ,setPreview}: TImageUploader) => {

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImages((prev) => [...prev, file]);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview((prev) => [...prev, reader.result as string]);
    };
    reader.readAsDataURL(file); // ✅ call here, *after* setting onloadend
  };

  return (
    <div className="space-y-2">
      {/* Custom File Input Label */}
      <Label
        htmlFor="image-upload"
        className="text-sm font-medium text-gray-700 flex items-center gap-2"
      >
        <ImageIcon className="h-4 w-4 text-blue-600" />
        Upload Images
      </Label>

      {/* Hidden File Input */}
      <Input
        id="image-upload"
        onChange={handleImage}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
      />

      {/* Custom Upload Area */}
      <label
        htmlFor="image-upload"
        className="flex flex-col items-center justify-center w-full h-20 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group"
      >
        <div className="flex flex-col items-center justify-center border ">
          <Upload className="w-4  text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
          <p className="text-sm text-gray-500 text-[12px]">
            <span className="font-semibold ">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-[10px] italic text-gray-400">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </label>
    </div>
  );
};

export default NMImageUploader;
