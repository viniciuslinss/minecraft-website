import { Metadata } from "next";

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  path?: string;
  publishedTime?: string;
  type?: "website" | "article";
}

export function generateMeta({
  title,
  description = "",
  keywords = [],
  image = `${process.env.NEXT_PUBLIC_SITE_URL}/open-graph.webp`,
  path = "",
  publishedTime,
  type = "website",
}: GenerateMetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const url = `${baseUrl}${path}`;

  return {
    title: `${title} - ${process.env.NEXT_PUBLIC_SITE_TITLE}`,
    description,
    keywords: [
      "Minecraft",
      "AI agents",
      "yapay zeka ajanları",
      "KI-Agenten",
      "agentes de IA",
      "人工智能代理",
      "ИИ-агенты",
      "otomatik inşaat",
      "automatic building",
      "automatisches Bauen",
      "construcción automática",
      "自动建造",
      "автоматическое строительство",
      "madencilik",
      "mining",
      "Bergbau",
      "minería",
      "采矿",
      "добыча",
      "tarım",
      "farming",
      "Landwirtschaft",
      "agricultura",
      "农耕",
      "фермерство",
      "oyun deneyimi",
      "game experience",
      "Spielerlebnis",
      "experiencia de juego",
      "游戏体验",
      "игровой опыт",
      "Minecraft ajanları",
      "Minecraft agents",
      "Minecraft-Agenten",
      "agentes de Minecraft",
      "Minecraft代理",
      "агенты Minecraft",
      "Cognicraft",
      ...keywords,
    ],
    authors: [{ name: "meşhur", url: baseUrl }],
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: `${title} - ${process.env.NEXT_PUBLIC_SITE_TITLE}`,
      description,
      url,
      siteName: process.env.NEXT_PUBLIC_SITE_TITLE!,
      images: [
        {
          url: image.startsWith("http") ? image : `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime,
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - ${process.env.NEXT_PUBLIC_SITE_TITLE}`,
      description,
      images: [image.startsWith("http") ? image : `${baseUrl}${image}`],
      creator: "@meşhur",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
  };
}
