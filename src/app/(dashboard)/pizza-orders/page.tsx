"use client";

import { PizzaOrdersDataTable } from "@/modules/pizza-orders/table/pizza-orders-datatable";
import React, { useEffect, useState } from "react";
import {
  PizzaOrders,
  pizzaOrdersData,
} from "@/modules/pizza-orders/order-data";
import { columns as pizzaOrdersColumns } from "@/modules/pizza-orders/table/pizza-orders-columns";
import { useToast } from "@/hooks/use-toast";

const PizzaOrdersPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<PizzaOrders[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Simulating API call with timeout
        await new Promise(resolve => setTimeout(resolve, 2000));
        setData(pizzaOrdersData);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load pizza orders. Please try again later.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [toast]);

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
