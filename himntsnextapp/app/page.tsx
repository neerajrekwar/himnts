import { Link } from "@nextui-org/link";

import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";

import { title, subtitle } from "@/components/primitives";

import {IconBrandInstagramFilled} from "@tabler/icons-react";

import HomeProcucts from "@/components/HomeProducts";

export default function Home() {
  return (
    <main className="m-auto max-w-5xl">
      <section className="flex  flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-4xl text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>Beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            Unforgettable Memories with Himnts Balloon Decoration Services!
          </span>
          <div className={subtitle({ class: "mt-4  max-w-2xl mx-auto" })}>
            Let Himnts Balloon Decorators help you create cherished memories for you loved ones, to your sign for spectacular celebrations.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "secondary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.offer}
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


      </section>
      <section>
        <HomeProcucts />
      </section>
    </main>
  );
}
