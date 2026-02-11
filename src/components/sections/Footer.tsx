import { CustomLink } from "@/components/CustomLink";
import { ArrowUpRight } from "lucide-react";

const credtis = [
  {
    name: "Anish Gupta",
    web: "https://anishfn.space",
  },
  {
    name: "I Putu Saputrayana",
    web: "https://iyansr.id",
  },
  {
    name: "Dillion Verma",
    web: "https://portfolio-magicui.vercel.app",
  },
];

const Footer = () => {
  return (
    <footer className="mb-12">
      <div className="flex items-end justify-between">
        <div className="flex flex-col space-y-4">
          <h4 className="text-foreground/30 text-sm">
            Credits for design inspiration
          </h4>
          <ul className="md:flex md:gap-3">
            {credtis.map((credit) => (
              <li key={credit.web}>
                <CustomLink
                  variant="muted"
                  href={credit.web}
                  className="text-xs"
                >
                  <span className="flex items-center gap-px transition-all duration-300 ease-in-out hover:gap-1">
                    {credit.name} <ArrowUpRight size={16} />
                  </span>
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-foreground/30 text-xl">₍^◞ ˕ ◟^₎⟆</p>
      </div>
    </footer>
  );
};

export { Footer };
