import { getTranslations } from "next-intl/server";

import { ZapIcon, ShieldIcon, UsersIcon, StarIcon } from "lucide-react";

import { Container, Section } from "@/components/ui/react/design-system";

async function FeaturesSection() {
  const t = await getTranslations("blocks.features_section");

  return (
    <Section>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-foreground mb-4 tracking-wider">
            {t("title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: ZapIcon,
              title: t("item.lightning_fast.title"),
              desc: t("item.lightning_fast.description"),
            },
            {
              icon: ShieldIcon,
              title: t("item.safe.title"),
              desc: t("item.safe.description"),
            },
            {
              icon: UsersIcon,
              title: t("item.support.title"),
              desc: t("item.support.description"),
            },
            {
              icon: StarIcon,
              title: t("item.top_rated.title"),
              desc: t("item.top_rated.description"),
            },
          ].map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary w-16 h-16 mx-auto mb-6 border-t-4 border-b-4 border-primary-rgb flex items-center justify-center">
                <feature.icon size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export { FeaturesSection };
