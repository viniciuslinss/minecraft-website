import { getTranslations } from "next-intl/server";
import { generateMeta } from "@/utils/meta/generate-meta";

import { ChooseAgentSection } from "@/components/blocks/choose-agent-section";
import { FeaturesSection } from "@/components/blocks/features-section";
import { Hero } from "@/components/features/homepage";

export async function generateMetadata() {
  const t = await getTranslations("pages.home.meta");

  return generateMeta({
    title: t("title"),
    description: t("description"),
  });
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChooseAgentSection />
      <FeaturesSection />
    </>
  );
}
