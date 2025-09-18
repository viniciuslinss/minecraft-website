import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/react/design-system";
import Link from "next/link";

async function Footer() {
  const t = await getTranslations("common.footer");
  return (
    <footer className="bg-secondary border-t-4 border-muted py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/assets/images/mini-app-icon.webp"
                width={32}
                height={32}
                alt="App Icon"
              />
              <span className="ml-3 text-xl font-bold text-secondary-foreground tracking-wider">
                Agen Craft
              </span>
            </div>
            <p className="text-muted-foreground">{t("description")}</p>
          </div>

          <div>
            <h4 className="text-secondary-foreground font-bold mb-4 border-b-2 border-primary pb-2">
              {t("label.products")}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="/#choose-agent"
                  className="hover:text-secondary-foreground"
                >
                  {t("button.builder_agent")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#choose-agent"
                  className="hover:text-secondary-foreground"
                >
                  {t("button.gatherer_agent")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#choose-agent"
                  className="hover:text-secondary-foreground"
                >
                  {t("button.collector_agent")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-secondary-foreground font-bold mb-4 border-b-2 border-primary pb-2">
              {t("label.support")}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-secondary-foreground">
                  {t("button.installation_guide")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-secondary-foreground">
                  {t("button.faq")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary-foreground">
                  {t("button.contact_us")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-secondary-foreground font-bold mb-4 border-b-2 border-primary pb-2">
              {t("label.connect")}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-secondary-foreground">
                  {t("button.discord_server")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary-foreground">
                  {t("button.reddit_community")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary-foreground">
                  {t("button.youtube_channel")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary-foreground">
                  {t("button.twitter")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-muted mt-12 pt-8 text-center">
          <p className="text-muted-foreground">{t("message")}</p>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
