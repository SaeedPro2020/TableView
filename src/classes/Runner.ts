import { randomUUID } from 'crypto';
import { Point } from './Point';

export class Runner {
  base?: Point;
  id: string;
  name: string;

  constructor(name: string, base?: Point) {
    this.base = base;
    this.name = name;
    this.id = randomUUID();
  }
}
