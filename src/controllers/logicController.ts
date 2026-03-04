import { Request, Response } from 'express';
import { splitString, concatenateStrings, isLeap, secretHandshake } from '../services/logic';
export const splitHandler = (req: Request, res: Response) => {
  const input = req.params.input;

  if (typeof input !== 'string') {
    return res.status(400).json({ error: 'Invalid input parameter' });
  }

  const revisedString = splitString(input);
  res.json({ revisedString });
};

export const concatHandler = (req: Request, res: Response) => {
  const { str1, str2 } = req.params;

  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return res.status(400).json({ error: 'Invalid parameters' });
  }

  const revisedString = concatenateStrings(str1, str2);
  res.json({ revisedString });
};

export const concatQueryHandler = (req: Request, res: Response) => {
  const str1 = req.query.str1 as string;
  const str2 = req.query.str2 as string;
  if (!str1 || !str2) {
    return res.status(400).json({ error: 'Missing query parameters str1 or str2' });
  }
  const revisedString = concatenateStrings(str1, str2);
  res.json({ revisedString });
};

export const leapHandler = (req: Request, res: Response) => {
  const year = Number(req.params.year);
  if (isNaN(year)) {
    return res.status(400).json({ error: 'Invalid year parameter' });
  }
  const leap = isLeap(year);
  res.json({ year, isLeap: leap });
};

export const secretHandshakeHandler = (req: Request, res: Response) => {
  const number = Number(req.params.number);
  if (isNaN(number)) {
    return res.status(400).json({ error: 'Invalid number parameter' });
  }
  const handshake = secretHandshake(number);
  res.json({ handshake });
};