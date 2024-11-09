import { filterOptions } from "@/config";
import { Label } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

const Filter = ({filters,handleFilter}) => {
  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-extrabold text-left">Filters</h2>
      </div>
      <div className="p-4 space-y-4">
        {Object.keys(filterOptions).map((keyItem) => (
          <>
            <div>
              <h3 className="text-base font-bold text-left">{keyItem}</h3>
              <div className="grid gap-2 mt-2">
                {filterOptions[keyItem].map((option) => (
                  <Label className="flex font-medium items-center gap-2 ">
                    <Checkbox 
                    checked={
                      filters && Object.keys(filters).length > 0 && 
                      filters[keyItem] && filters[keyItem].indexOf(option.id) > -1
                    }
                    onCheckedChange={()=>handleFilter(keyItem,option.id)} className="form-checkbox border-black text-black" />
                    {option.label}
                  </Label>
                ))}
              </div>
            </div>
            <Separator />
          </>
        ))}
      </div>
    </div>
  );
};

export default Filter;
