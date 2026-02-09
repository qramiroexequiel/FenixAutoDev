"use client";

const TECH_STACK = [
  { name: "Python", src: "https://cdn.simpleicons.org/python/94a3b8" },
  { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/94a3b8" },
  { name: "React", src: "https://cdn.simpleicons.org/react/94a3b8" },
  { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs/94a3b8" },
  { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/94a3b8" },
  { name: "Docker", src: "https://cdn.simpleicons.org/docker/94a3b8" },
  { name: "AWS", src: "https://cdn.simpleicons.org/amazonaws/94a3b8" },
  { name: "OpenAI", src: "https://cdn.simpleicons.org/openai/94a3b8" },
];

function TechItem({
  name,
  src,
}: {
  name: string;
  src: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 shrink-0 px-8 group cursor-default">
      <img
        src={src}
        alt={`${name} - Tecnología de automatización y software a medida Fénix AutoDev`}
        className="h-8 w-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 group-hover:brightness-150"
        width={32}
        height={32}
      />
      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
        {name}
      </span>
    </div>
  );
}

export function TechTicker() {
  const duplicated = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="py-6 bg-transparent border-y border-border/50 overflow-hidden">
      <div className="flex animate-marquee gap-0 w-max">
        {duplicated.map((tech, i) => (
          <TechItem key={`${tech.name}-${i}`} name={tech.name} src={tech.src} />
        ))}
      </div>
    </section>
  );
}
