import { NextApiRequest, NextApiResponse } from "next";
import { getProducts } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const search = req.query.q;

    try {
      let products;
      if (search) {
        products = await getProducts({
          where: {
            OR: [
              {
                name: {
                  contains: search,
                },
              },
              { description: { contains: search } },
              { title: { contains: search } },
            ],
          },
        });
      } else {
        products = await getProducts();
      }
      res.status(200).json({ data: products, error: false });
    } catch (error) {
      res.status(500).json({ data: [], error: true });
    }
  }
}
