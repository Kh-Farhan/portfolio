import { content } from "@/content";

export function PathAndStack() {
  const { path, stack } = content;

  return (
    <section className="grid grid-cols-12 gap-4 pt-12">
      <div id="path" className="tile col-span-12 flex flex-col gap-[22px] rounded-[28px] bg-white p-8 lg:col-span-5">
        <h2 className="font-display text-[34px] font-extrabold tracking-[-0.035em]">{path.title}</h2>
        <ol className="flex flex-col border-l-2 border-ink">
          {path.items.map((item, i) => (
            <li key={item.title} className={`relative flex flex-col gap-1 pl-6 ${i < path.items.length - 1 ? "pb-6" : ""}`}>
              <span
                aria-hidden="true"
                className={`absolute top-[3px] -left-2 size-3.5 rounded-full border-2 border-ink ${item.current ? "bg-orange" : "bg-white"}`}
              />
              <span className="font-mono text-xs text-muted">{item.dates}</span>
              <span className="text-[17px] font-semibold">{item.title}</span>
              {item.description && <span className="text-sm leading-normal text-muted">{item.description}</span>}
            </li>
          ))}
        </ol>
      </div>

      <div id="stack" className="tile col-span-12 flex min-w-0 flex-col gap-5 rounded-[28px] bg-white p-8 lg:col-span-7">
        <h2 className="font-display text-[34px] font-extrabold tracking-[-0.035em]">{stack.title}</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-6 gap-y-4">
          {stack.groups.map((g) => (
            <div key={g.name} className="flex flex-col gap-2">
              <h3 className="font-mono text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">{g.name}</h3>
              <ul className="flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <li key={item} className="rounded-full bg-paper px-[11px] py-1.5 text-[13px] font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
