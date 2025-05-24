"use client";

import { PizzaOrdersDataTable } from "@/modules/pizza-orders/table/pizza-orders-datatable";
import React, { useEffect, useState } from "react";
import {
  PizzaOrders,
  pizzaOrdersData,
} from "@/modules/pizza-orders/order-data";
import { columns as pizzaOrdersColumns } from "@/modules/pizza-orders/table/pizza-orders-columns";

const PizzaOrdersPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<PizzaOrders[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setData(pizzaOrdersData);
    }, 2000);

    // Optional cleanup
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-5 md:px-10 py-2">
      <div className="flex-1 flex flex-col gap-2 md:mx-0 py-2">
        <PizzaOrdersDataTable
          columns={pizzaOrdersColumns}
          data={data || []}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default PizzaOrdersPage;
