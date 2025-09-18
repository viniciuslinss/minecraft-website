import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { Nav } from "@/components/ui/react/design-system";
import { Button } from "@/components/ui/primitives/button";
import { LanguageSelect } from "@/components/ui/react/language-select";

async function Navbar() {
  const locale = await getLocale();
  const t = await getTranslations("common.navbar");

  return (
    <Nav
      className="border-b-4 border-muted sticky top-0 z-50 bg-secondary"
      containerClassName="flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <Image
          src="/assets/images/mini-app-icon.webp"
          width={50}
          height={50}
          alt="Logo"
        />
      </div>
      <div className="flex items-center gap-4">
        <LanguageSelect code={locale} />
        <Button size="lg">{t("button")}</Button>
      </div>
    </Nav>
  );
}

export { Navbar };
