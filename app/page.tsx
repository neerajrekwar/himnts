import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { HomeProducts } from "@/components/HomeProducts";
import { IconBrandInstagramFilled } from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="m-auto">
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            Unforgettable Memories Spectacle into Happiness with Himnts Balloon
            Designs!.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Himnts Adding Color, Charm, and Cheer to Every Moment.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.offers}
          >
            Offers
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.instagram}
          >
            <IconBrandInstagramFilled size={20} />
            Instagram
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by himnts{" "}
              <Code color="primary">We&apos;re genuine</Code>
            </span>
          </Snippet>
        </div>
      </section>
      <section className="">
        <HomeProducts />
      </section>
    </main>
  );
}
