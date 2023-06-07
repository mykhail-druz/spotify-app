// pages/api/time.ts

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const hours = Number(req.query.hours);

  if (isNaN(hours)) {
    res.status(400).json({ error: 'Invalid hours parameter' });
    return;
  }

  let greeting: string;

  if (hours >= 0 && hours < 5) {
    greeting = 'Доброй ночи';
  } else if (hours >= 5 && hours < 12) {
    greeting = 'Доброе утро';
  } else if (hours >= 12 && hours < 20) {
    greeting = 'Добрый день';
  } else {
    greeting = 'Добрый вечер';
  }

  res.status(200).json({ greeting });
}
