"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaSpinner } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useMemo } from "react";
import TableFilters from "@/components/table-filters";
import { useFilterParamaters } from "@/store/use-filter-parameters";
import { PizzaOrders } from "../order-data";

interface DataTableProps<TData extends PizzaOrders, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading: boolean;
}

export function PizzaOrdersDataTable<TData extends PizzaOrders, TValue>({
  columns,
  data,
  isLoading,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const {
    dateFilter,
    setDateFilter,
    selectedFilter,
    setSelectedFilter,
    querykey,
    setQueryKey,
  } = useFilterParamaters();

  // Filter data based on date range and search query
  const filteredData = useMemo(() => {
    let filtered = data;

    // Apply date filtering
    if (dateFilter.startDate && dateFilter.endDate) {
      filtered = filtered.filter((item) => {
        const itemDate = new Date(item.createdAt);
        const startDate = new Date(dateFilter.startDate);
        const endDate = new Date(dateFilter.endDate);

        // Set end date to end of day
        endDate.setHours(23, 59, 59, 999);

        return itemDate >= startDate && itemDate <= endDate;
      });
    }

    // Apply search query filtering
    if (querykey) {
      const searchTerm = querykey.toLowerCase();
      filtered = filtered.filter((item) => {
        // Search in relevant fields
        return (
          item.customerName.toLowerCase().includes(searchTerm) ||
          item.orderId.toLowerCase().includes(searchTerm) ||
          item.pizzaType.toLowerCase().includes(searchTerm) ||
          item.status.toLowerCase().includes(searchTerm)
        );
      });
    }

    return filtered;
  }, [data, dateFilter, querykey]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className="flex-1 flex flex-col gap-2 md:mx-0 py-2">
      <TableFilters
        title="Pizza Orders"
        buttonTitle="Add Products"
        formLink="/products/new"
        canAddNew
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        dateFilter={dateFilter}
        onDateFilterChange={setDateFilter}
      />

      <div className="flex flex-col gap-2 w-full overflow-auto">
        <div className="flex items-center lg:w-auto w-full">
          <Input
            placeholder="Search orders..."
            value={querykey}
            onChange={(e) => {
              setQueryKey(e.target.value);
            }}
            className="text-sm md:text-base md:max-w-sm lg:flex-shrink-0"
          />
        </div>

        <div className="rounded-md border w-full overflow-auto">
          <Table className="w-full overflow-auto">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className="text-orange-400"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="text-gray-700 dark:text-muted-foreground">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    {isLoading ? (
                      <div className="flex justify-center items-center text-orange-400">
                        <FaSpinner className="animate-spin text-2xl text-orange-400" />
                      </div>
                    ) : (
                      "No results."
                    )}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="mt-3 pt-3 flex items-center justify-center md:justify-between px-2">
          <div className="md:hidden flex items-center justify-end gap-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
          <div className="hidden md:block flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="hidden md:flex items-center gap-4 space-x-6 lg:space-x-8">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">Rows per page</p>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value));
                }}
              >
                <SelectTrigger className="h-8 w-[70px]">
                  <SelectValue
                    placeholder={table.getState().pagination.pageSize}
                  />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex w-[100px] items-center justify-center text-sm font-medium">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Go to first page</span>
                <ChevronsLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Go to previous page</span>
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Go to next page</span>
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Go to last page</span>
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
