import { getTranslations } from "next-intl/server";

import { PixelBlast } from "@/components/ui/react/pixel-blast";
import { Button } from "@/components/ui/primitives/button";

async function Hero() {
  const t = await getTranslations("features.homepage.hero");
  return (
    <div className="flex items-center container h-screen gap-10">
      <div className=" text-center flex flex-col items-center w-full lg:w-1/2">
        <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-4 tracking-wider">
          {t("title")}
        </h2>
        <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
          {t("description")}
        </p>
        <div className="flex items-center gap-5 mt-10">
          <Button size="xl" variant="secondary">
            {t("login_button")}
          </Button>
          <Button size="xl">{t("download_button")}</Button>
        </div>
      </div>
      <div className="w-1/2 hidden lg:block h-[60vh]">
        <PixelBlast
          variant="square"
          pixelSize={30}
          color="#009966"
          patternScale={6}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>
    </div>
  );
}

export { Hero };
