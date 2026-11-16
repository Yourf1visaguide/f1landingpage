import type { FAQType } from "@/lib/types";

/** Renders the paragraphs / list / table parts of an FAQType answer. */
export default function FaqAnswer({ faq }: { faq: FAQType }) {
  return (
    <div className="flex flex-col gap-3 text-[16px] leading-[1.75] text-secondary/80">
      {faq.paragraphs?.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {faq.list && faq.list.length > 0 && (
        <ul className="ml-5 list-disc space-y-1 marker:text-accent">
          {faq.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {faq.table && (
        <div className="overflow-x-auto rounded-lg border border-secondary/15">
          <table className="w-full min-w-[420px] text-left text-[15px]">
            <thead className="bg-secondary/[0.05] font-mono text-[11px] uppercase tracking-[0.16em] text-secondary/60">
              <tr>
                {faq.table.headers.map((h) => (
                  <th key={h} scope="col" className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {faq.table.rows.map((row, r) => (
                <tr key={r} className="border-t border-secondary/10">
                  {row.map((cell, c) => (
                    <td key={c} className="px-4 py-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {faq.custom}
    </div>
  );
}