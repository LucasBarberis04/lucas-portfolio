import { Reveal } from "./reveal";

type SectionHeadingProps = {
  index: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        <span>{index}</span>
        <span className="h-px w-10 bg-accent/40" />
        <span className="text-muted">./{title.toLowerCase().replace(/\s+/g, "-")}</span>
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
