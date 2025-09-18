import { getTranslations } from "next-intl/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/primitives/accordion";

async function FaqSection() {
  const t = await getTranslations("blocks.faq_section");

  const items = Array.from({ length: 6 }).map((_, idx) => ({
    label: t(`item_${idx + 1}.label`),
    message: t(`item_${idx + 1}.message`),
  }));

  return (
    <Accordion type="multiple">
      {items.map((item, idx) => (
        <AccordionItem key={idx} value={item.label}>
          <AccordionTrigger>{item.label}</AccordionTrigger>
          <AccordionContent>{item.message}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export { FaqSection };
