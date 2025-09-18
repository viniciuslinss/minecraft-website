import { getTranslations } from "next-intl/server";

import {
  MountainIcon,
  PackageIcon,
  PickaxeIcon,
  ShoppingCartIcon,
  StarIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Container, Section } from "@/components/ui/react/design-system";

async function ChooseAgentSection() {
  const t = await getTranslations("blocks.choose_agent_section");
  const agents = [
    {
      id: 1,
      name: t("item.builder_agent.title"),
      icon: PickaxeIcon,
      price: "$12.99",
      originalPrice: "$19.99",
      description: t("item.builder_agent.description"),
      features: [
        t("item.builder_agent.feature.blueprint"),
        t("item.builder_agent.feature.resource"),
        t("item.builder_agent.feature.buildings"),
        t("item.builder_agent.feature.redstone"),
      ],
      color: "bg-amber-600 border-amber-700",
      shadowColor: "shadow-amber-800/50",
    },
    {
      id: 2,
      name: t("item.gatherer_agent.title"),
      icon: MountainIcon,
      price: "$9.99",
      originalPrice: "$14.99",
      description: t("item.gatherer_agent.description"),
      features: [
        t("item.gatherer_agent.feature.mining"),
        t("item.gatherer_agent.feature.cave"),
        t("item.gatherer_agent.feature.ore"),
        t("item.gatherer_agent.feature.safe"),
      ],
      color: "bg-stone-600 border-stone-700",
      shadowColor: "shadow-stone-800/50",
    },
    {
      id: 3,
      name: t("item.collector_agent.title"),
      icon: PackageIcon,
      price: "$7.99",
      originalPrice: "$11.99",
      description: t("item.collector_agent.description"),
      features: [
        t("item.collector_agent.feature.smart"),
        t("item.collector_agent.feature.chest"),
        t("item.collector_agent.feature.farming"),
        t("item.collector_agent.feature.trade"),
      ],
      color: "bg-emerald-600 border-emerald-700",
      shadowColor: "shadow-emerald-800/50",
    },
  ];

  return (
    <Section
      id="choose-agent"
      className="bg-secondary border-t-4 border-b-4 border-muted"
    >
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-secondary-foreground mb-4 tracking-wider">
            {t("title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {agents.map((agent) => {
            const IconComponent = agent.icon;
            return (
              <div
                key={agent.id}
                id={agent.id.toString()}
                className="flex flex-col border-4 border-muted"
              >
                <div
                  className={cn(
                    "p-6 border-b-4 border-muted relative overflow-hidden h-64",
                    agent.color,
                  )}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 transform rotate-45 translate-x-8 -translate-y-8"></div>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent
                      size={48}
                      className="text-white drop-shadow-lg"
                    />
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          size={16}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">
                    {agent.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-white">
                      {agent.price}
                    </span>
                    <span className="text-lg text-stone-200 line-through">
                      {agent.originalPrice}
                    </span>
                    <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold border-t-2 border-b-2 border-red-700">
                      {t("sale")}
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-background h-full flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                      {agent.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {agent.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-3 h-3 bg-primary border border-primary-rgb mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    className={cn(
                      "w-full font-bold py-4 flex items-center gap-2 px-6 border-t-4 border-b-4 hover:bg-primary hover:border-primary-rgb cursor-pointer justify-center",
                      agent.color,
                    )}
                  >
                    <ShoppingCartIcon size={20} />
                    {t("buy_now_button")}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export { ChooseAgentSection };
