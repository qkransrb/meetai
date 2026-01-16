import Image from "next/image";

import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  className?: string;
}

export const EmptyState = ({ title, description, className }: Props) => {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      {/* <h1 className="text-3xl font-bold py-6 text-primary">Meet.AI</h1> */}
      <Image src="/empty.svg" alt="Empty" width={240} height={240} priority />
      <div className="flex flex-col gap-y-6 max-w-md mx-auto text-center">
        <h6 className="text-lg font-medium">{title}</h6>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
