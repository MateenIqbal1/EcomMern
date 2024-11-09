import Filter from "@/components/shopping-view/Filter";
import ProductDetails from "@/components/shopping-view/ProductDetails";
import ProductTile from "@/components/shopping-view/ProductTile";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sortOptions } from "@/config";
import { fetchAllProducts } from "@/store/admin/products-slice";
import { fetchAllFilteredProducts, fetchProductDetails } from "@/store/shop/products-slice";
import { ArrowUpDownIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { validators } from "tailwind-merge";


function createSearchParamsHelper(filtersParams){
  const queryParams=[];
  for(const [key,value] of Object.entries(filtersParams)){
    if(Array.isArray(value) && value.length >0){
      const paramValue=value.join(',')
      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`)
    }
  }
  console.log(queryParams,)
  return queryParams.join('&')
}

const ShoppingListing = () => {
  const dispatch = useDispatch();
  const { productList ,productDetails} = useSelector((state) => state.shopProducts);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(null);
  const [openDetailsDialog,setOpenDetailsDialog]=useState(false)
  const [searchParams,setSearchParams]=useSearchParams()
  //fetch list of products
  function handleSort(value) {
    setSort(value);
  }
  function handleFilter(getSectionId, getCurrentOption) {
    console.log(getSectionId, getCurrentOption);

    let cpyFilters = { ...filters };
    const indexOfCurrentSection = Object.keys(cpyFilters).indexOf(getSectionId);
    if (indexOfCurrentSection === -1) {
      cpyFilters = {
        ...cpyFilters,
        [getSectionId]: [getCurrentOption],
      };
    } else {
      const indexOfCurrentOption =
        cpyFilters[getSectionId].indexOf(getCurrentOption);
      if (indexOfCurrentOption === -1) {
        cpyFilters[getSectionId].push(getCurrentOption);
      } else {
        cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
      }
    }
    console.log(cpyFilters);
    setFilters(cpyFilters);
    sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
  }

  function handleGetProductDetails(getCurrentProductId){
    console.log(getCurrentProductId)
    dispatch(fetchProductDetails(getCurrentProductId))
  }

  useEffect(() => {
    setSort("price-lowtohigh");
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  }, []);
   
   useEffect(() => {
    if(filters && Object.keys(filters).length > 0){
      const createQueryString=createSearchParamsHelper(filters)
      setSearchParams(new URLSearchParams(createQueryString))
    }
   }, [filters])
   

  useEffect(() => {
    if(filters!==null && sort!==null)
    dispatch(fetchAllFilteredProducts({filterParams:filters,sortParams:sort}));
  }, [dispatch,sort,filters]);

  useEffect(()=>{
    if(productDetails !==null)setOpenDetailsDialog(true)
  },[productDetails])
  console.log(productDetails,'productDetials');
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6">
      <aside className="w-full md:w-[200px]">
        <Filter filters={filters} handleFilter={handleFilter} />
      </aside>
      <div className="flex-1 flex flex-col gap-4">
        {/* Flex container for heading and sort button */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-white shadow-md">
          <div className="flex items-center">
            <h2 className="text-lg font-extrabold">All products</h2>
            <span className="text-muted-foreground ml-80 bg-gray-300 border border-gray-400 rounded px-2 py-1">
              {productList?.length} products
            </span>
          </div>
          {/* Sort By Button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <ArrowUpDownIcon className="h-4 w-4" />
                <span>Sort By</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                {sortOptions.map((sortItem) => (
                  <DropdownMenuRadioItem
                    value={sortItem.id}
                    key={sortItem.id}
                    className="bg-white text-black hover:bg-gray-100"
                  >
                    {sortItem.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 p-4">
          {productList && productList.length > 0
            ? productList.map((productItem) => (
                <ProductTile handleGetProductDetails={handleGetProductDetails} product={productItem} />
              ))
            : null}
        </div>
      </div>
      <ProductDetails open={openDetailsDialog} setOpen={setOpenDetailsDialog} productDetails={productDetails}/>
    </div>
  );
};

export default ShoppingListing;
