"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const DataPagination = ({ page, totalPages, onPageChange }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 text-sm text-muted-foreground">
        Page {page} of {totalPages || 1}
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          type="button"
          disabled={page === 1}
          variant="outline"
          size="icon"
          onClick={() => onPageChange(Math.max(1, page - 1))}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          type="button"
          disabled={page === totalPages || totalPages === 0}
          variant="outline"
          size="icon"
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
};
