import { getTranslations } from "next-intl/server";
import { generateMeta } from "@/utils/meta/generate-meta";

import { FaqSection } from "@/components/blocks/faq-section";

export async function generateMetadata() {
  const t = await getTranslations("pages.faq.meta");

  return generateMeta({
    title: t("title"),
    description: t("description"),
  });
}

export default function FaqPage() {
  return <FaqSection />;
}
