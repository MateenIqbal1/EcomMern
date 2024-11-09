import React from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { StarIcon } from "lucide-react";
import { Input } from "../ui/input";

const ProductDetails = ({ open, setOpen, productDetails }) => {
  if (!productDetails) {
    return <div>Loading...</div>; // Show a loading message if necessary
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <DialogContent className="bg-gray-200 p-6 rounded-lg max-w-[90vw] sm:max-w-[70vw] lg:max-w-[70vw] shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={productDetails.image}
              alt={productDetails.title}
              width={600}
              height={600}
              className="aspect-square w-full object-cover rounded-lg border-4 border-gray-300 shadow-md"
            />
          </div>
          <div className="flex flex-col justify-start space-y-2">
            <h1 className="text-3xl font-extrabold">{productDetails.title}</h1>
            <p className="text-muted-foreground text-base">
              {productDetails.description}
            </p>
            <div className="flex items-center space-x-4">
              <p
                className={`text-2xl font-bold text-primary ${
                  productDetails?.salePrice > 0 ? "line-through" : ""
                }`}
              >
                ${productDetails.price}
              </p>
              {productDetails?.salePrice > 0 && (
                <p className="text-2xl font-bold text-gray-600">
                  ${productDetails.salePrice}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-0.5">
                       <StarIcon className="w-5 h-5 fill-black"/>
                       <StarIcon className="w-5 h-5 fill-black"/>
                       <StarIcon className="w-5 h-5 fill-black"/>
                       <StarIcon className="w-5 h-5 fill-primary"/>
                       <StarIcon className="w-5 h-5 fill-primary"/>
                        </div>
                        <span className="text-muted-foreground">(4.5)</span>
            </div>
            <div className="mt-5 mb-5">
              <Button className="bg-gray-900 text-white w-full">
                Add to Cart
              </Button>
            </div>
            <div className="max-h-[300px] overflow-auto">
              <h2 className="text-xl font-bold mb-4">Reviews</h2>
              <div className="grid gap-6">
                <div className="flex gap-4">
                    <Avatar className='w-10 h-10 border'>
                        <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                            <h3 className="font-bold">Qaisrani</h3>
                        </div>
                        <div className="flex items-center gap-0.5">
                       <StarIcon className="w-5 h-5 fill-black"/>
                       <StarIcon className="w-5 h-5 fill-black"/>
                       <StarIcon className="w-5 h-5 fill-black"/>
                       <StarIcon className="w-5 h-5 fill-primary"/>
                       <StarIcon className="w-5 h-5 fill-primary"/>
                        </div>
                        <p className="text-muted-foreground">
                            this is an awesome product
                        </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Avatar className='w-10 h-10 border'>
                        <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                            <h3 className="font-bold">Qaisrani</h3>
                        </div>
                        <div className="flex items-center gap-0.5">
                       <StarIcon className="w-5 h-5 fill-black"/>
                       <StarIcon className="w-5 h-5 fill-black"/>
                       <StarIcon className="w-5 h-5 fill-black"/>
                       <StarIcon className="w-5 h-5 fill-primary"/>
                       <StarIcon className="w-5 h-5 fill-primary"/>
                        </div>
                        <p className="text-muted-foreground">
                            this is an awesome product
                        </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Avatar className='w-10 h-10 border'>
                        <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                            <h3 className="font-bold">Qaisrani</h3>
                        </div>
                        <div className="flex items-center gap-0.5">
                       <StarIcon className="w-5 h-5 fill-black"/>
                       <StarIcon className="w-5 h-5 fill-black"/>
                       <StarIcon className="w-5 h-5 fill-black"/>
                       <StarIcon className="w-5 h-5 fill-primary"/>
                       <StarIcon className="w-5 h-5 fill-primary"/>
                        </div>
                        <p className="text-muted-foreground">
                            this is an awesome product
                        </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Avatar className='w-10 h-10 border'>
                        <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                            <h3 className="font-bold">Qaisrani</h3>
                        </div>
                        <div className="flex items-center gap-0.5">
                       <StarIcon className="w-5 h-5 fill-black"/>
                       <StarIcon className="w-5 h-5 fill-black"/>
                       <StarIcon className="w-5 h-5 fill-black"/>
                       <StarIcon className="w-5 h-5 fill-primary"/>
                       <StarIcon className="w-5 h-5 fill-primary"/>
                        </div>
                        <p className="text-muted-foreground">
                            this is an awesome product
                        </p>
                    </div>
                </div>  
              </div>
            </div>
            <div className="mt-6 flex gap-2">
               <Input placeholder='write a comment...'  className="border border-gray-300 rounded px-4 py-2"/> 
               <Button>Submit</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetails;
