"use client";

import { ColumnDef } from "@tanstack/react-table";
import { PizzaOrders } from "../order-data";
import Image from "next/image";
import dayjs from "dayjs";
import { ArrowUpDown } from "lucide-react";
import SortOrdersStatus from "./sort-orders";

export const columns: ColumnDef<PizzaOrders>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <Image
        src={row.getValue("image") || "/images/placeholder.svg"}
        alt={row.getValue("pizzaType")}
        width={40}
        height={40}
        className="w-10 h-10 object-cover rounded-full border border-gray-400"
      />
    ),
  },
  {
    accessorKey: "orderId",
    // header: "Order Id",
    header: ({ column }) => {
      return (
        <button
          className="flex flex-row items-center gap-0.5"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
  },
  {
    accessorKey: "pizzaType",
    header: "Pizza Type",
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <button
          className="flex flex-row items-center gap-0.5"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "quantity",
    // header: "Quantity",
    header: ({ column }) => {
      return (
        <button
          className="flex flex-row items-center gap-0.5"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Quantity
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "createdAt",
    // header: "Order Date",
    header: ({ column }) => {
      return (
        <button
          className="flex flex-row items-center gap-0.5"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => dayjs(row.getValue("createdAt")).format("MMMM D, YYYY"),
  },
  {
    accessorKey: "status",
    // header: "Status",
    header: ({ column }) => {
      return (
        <button
          className="flex flex-row items-center gap-1"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => <SortOrdersStatus data={row.original} />,
  },
];
