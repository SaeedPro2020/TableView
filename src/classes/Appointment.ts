import moment from 'moment';
import { Point } from './Point';

/**
 * This class rapresents an appointment for a visit.
 */
export class Appointment {
  when: Date;
  where: Point;
  endTime: Date;
  duration: number; // in mimutes

  constructor(where: Point, when: Date, duration = 60) {
    this.where = where;
    this.when = when;
    this.endTime = moment(this.when).add(duration, 'minutes').toDate();
    this.duration = duration;
  }
}
