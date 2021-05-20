export const UnitTypes = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];

export type UnitType = typeof UnitTypes[number];

export const unit: Record<UnitType, number> = {
  xxs: 4,
  xs: 6,
  s: 8,
  m: 12,
  l: 16,
  xl: 24,
  xxl: 30,
};
