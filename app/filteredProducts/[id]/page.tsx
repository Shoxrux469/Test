import React from "react";
import ProductsService from "@/services/api/products";
import { IProduct } from "@/interfaces/product";
import ProductCart from "@/components/productCart/ProductCart";

interface params {
  params: {
    id: string;
  };
}

const FilteredProducts: React.FC<params> = async ({
  params: { id },
}: params) => {
  // const subcategory = searchParams.get("category");
  // const searchText = searchParams.get("searchText");

  console.log(id);

  let filteredProducts: IProduct[] = [];

  if (id) {
    filteredProducts = await ProductsService.GetSubcategoryById(id);
  }

  // } else if (searchText) {
  // const products = await ProductsService.GetByTitle(searchText);
  // filteredProducts = products;
  // }

  return (
    <div>
      {id && (
        <>
          <h1 className="text-3xl text-primary text-center w-full font-semibold">
            Найденные продукты!
          </h1>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, i) => (
                <ProductCart key={i} product={product} />
              ))
            ) : (
              <p className="text-3xl">No products found</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default FilteredProducts;
