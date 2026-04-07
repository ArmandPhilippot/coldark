import type { VariantKey } from "../types/tokens";
import { PALETTE } from "./constants";

export type ColdarkToken = keyof typeof PALETTE;

export const getPaletteHex = (token: ColdarkToken, variant?: VariantKey) => {
  const entries = PALETTE[token];

  if (variant === undefined) {
    if (entries.length === 1) {
      return entries[0].hex;
    }

    throw new Error(
      `Multiple hex values found for "${token}". Pass a variant to select one.`
    );
  }

  const entry = entries.find(
    (candidate) => "variant" in candidate && candidate.variant === variant
  );

  if (!entry) {
    throw new Error(`No hex value found for "${token}" (${variant}).`);
  }

  return entry.hex;
};
