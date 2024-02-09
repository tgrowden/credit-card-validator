import type { NextApiRequest, NextApiResponse } from "next";
import isValidLuhn from "@/lib/isValidLuhnCreditCard";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { cardNumber } = req.body;

  if (typeof cardNumber !== "string") {
    return res.status(400).json({ message: "Invalid card number" });
  }

  if (!isValidLuhn(cardNumber)) {
    return res.status(400).json({ message: "Invalid card number" });
  }

  res.status(200).json({ message: "success" });
}
