import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerificationBadgeProps {
  size?: "sm" | "md";
  className?: string;
}

export default function VerificationBadge({
  size = "sm",
  className,
}: VerificationBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 bg-primary-50 text-primary-700 font-semibold rounded-full",
        size === "sm" ? "text-xs px-2.5 py-1" : "text-sm px-3 py-1.5",
        className
      )}
    >
      <ShieldCheck
        className={cn(size === "sm" ? "w-3 h-3" : "w-4 h-4")}
        strokeWidth={2.5}
      />
      Verified
    </span>
  );
}
