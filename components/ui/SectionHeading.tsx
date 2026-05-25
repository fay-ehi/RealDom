import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary-700 uppercase bg-primary-50 px-3.5 py-1.5 rounded-full mb-4">
          {eyebrow}
        </span>
      )}
      <h2
        className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-charcoal-900 leading-tight tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-text">{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg text-gray-500 leading-relaxed",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
