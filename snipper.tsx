import { cn } from "~/lib/utils";

export default function Snipper({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("w-4 h-4", className)} {...props}>
      <div className="relative top-1/2 left-1/2 w-full h-full">
        {Array(12)
          .fill(0)
          .map((index) => (
            <div
              key={index}
              className="animate-spinner bg-current rounded-lg h-[8%] left-[-10%] absolute top-[-3.9%] w-[24%]"
            ></div>
          ))}
      </div>
    </div>
  );
}
