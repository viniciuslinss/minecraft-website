"use client";

import i18n from "@/i18n";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/primitives/select";
import ReactCountryFlag from "react-country-flag";

interface Props {
  code: string;
}

function LanguageSelect({ code }: Props) {
  const handleLocaleChange = (countryCode: string) => {
    document.cookie = `NEXT_LOCALE=${countryCode}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  };

  return (
    <Select defaultValue={code} onValueChange={handleLocaleChange}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {i18n.locales.map((locale, idx) => (
          <SelectItem key={idx} value={locale.code}>
            <ReactCountryFlag countryCode={locale.countryCode} svg />
            {locale.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export { LanguageSelect };
export type { Props as LanguageSelectProps };
