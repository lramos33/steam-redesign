"use client";

import { Icons } from "../others/Icons";

import { DropdownMenu } from "../primitives/DropdownMenu";
import { ScrollArea } from "../primitives/ScrollArea";

export function LanguageMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-1 text-sm text-dim">
        Language <Icons.LuChevronDown />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end">
        <ScrollArea>
          <div className="max-h-96">
            <DropdownMenu.Item>简体中文 (Simplified Chinese)</DropdownMenu.Item>
            <DropdownMenu.Item>繁體中文 (Traditional Chinese)</DropdownMenu.Item>
            <DropdownMenu.Item>日本語 (Japanese)</DropdownMenu.Item>
            <DropdownMenu.Item>한국어 (Korean)</DropdownMenu.Item>
            <DropdownMenu.Item>ไทย (Thai)</DropdownMenu.Item>
            <DropdownMenu.Item>Български (Bulgarian)</DropdownMenu.Item>
            <DropdownMenu.Item>Čeština (Czech)</DropdownMenu.Item>
            <DropdownMenu.Item>Dansk (Danish)</DropdownMenu.Item>
            <DropdownMenu.Item>Deutsch (German)</DropdownMenu.Item>
            <DropdownMenu.Item>Español - España (Spanish - Spain)</DropdownMenu.Item>
            <DropdownMenu.Item>Español - Latinoamérica (Spanish - Latin America)</DropdownMenu.Item>
            <DropdownMenu.Item>Ελληνικά (Greek)</DropdownMenu.Item>
            <DropdownMenu.Item>Français (French)</DropdownMenu.Item>
            <DropdownMenu.Item>Italiano (Italian)</DropdownMenu.Item>
            <DropdownMenu.Item>Bahasa Indonesia (Indonesian)</DropdownMenu.Item>
            <DropdownMenu.Item>Magyar (Hungarian)</DropdownMenu.Item>
            <DropdownMenu.Item>Nederlands (Dutch)</DropdownMenu.Item>
            <DropdownMenu.Item>Norsk (Norwegian)</DropdownMenu.Item>
            <DropdownMenu.Item>Polski (Polish)</DropdownMenu.Item>
            <DropdownMenu.Item>Português (Portuguese - Portugal)</DropdownMenu.Item>
            <DropdownMenu.Item>Português - Brasil (Portuguese - Brazil)</DropdownMenu.Item>
            <DropdownMenu.Item>Română (Romanian)</DropdownMenu.Item>
            <DropdownMenu.Item>Русский (Russian)</DropdownMenu.Item>
            <DropdownMenu.Item>Suomi (Finnish)</DropdownMenu.Item>
            <DropdownMenu.Item>Svenska (Swedish)</DropdownMenu.Item>
            <DropdownMenu.Item>Türkçe (Turkish)</DropdownMenu.Item>
            <DropdownMenu.Item>Tiếng Việt (Vietnamese)</DropdownMenu.Item>
            <DropdownMenu.Item>Українська (Ukrainian)</DropdownMenu.Item>
          </div>
        </ScrollArea>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
