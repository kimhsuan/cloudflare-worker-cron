import { GetHoyabitPrice, GetMaxPrice } from "../price";
import { Decimal } from 'decimal.js';

export const Price = async () => {
  const hoyaBuyPrice = Number.parseFloat(await GetHoyabitPrice()).toFixed(3);
  const maxSellPrice = Number.parseFloat(await GetMaxPrice()).toFixed(3);
  const diff = new Decimal(maxSellPrice).minus(hoyaBuyPrice);
  return new Response(
    JSON.stringify(
      {
        hoyaBuyPrice: hoyaBuyPrice,
        maxSellPrice: maxSellPrice,
        diff: diff,
      }
    ),
    {
      status: 200,
      headers: {
        "content-type": "application/json;charset=UTF-8",
      }
    }
  );
}
