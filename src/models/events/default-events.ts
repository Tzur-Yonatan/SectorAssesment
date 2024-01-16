import { Severity } from '../../types/severity.type';
import { CreateEvent } from './dto/create-event.dto';
import { EventClassification } from './entities/event.types';

const getOneMonthAgo = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return date;
};

const getDaysFromDate = (
  numberOfDaysAfter: number,
  date: Date = new Date(),
) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numberOfDaysAfter);
  return newDate;
};

const oneMonthAgo = getOneMonthAgo();

export const defaultEvents: CreateEvent[] = [
  {
    time: new Date(),
    severity: Severity.LOW,
    classification: EventClassification.COLD_WEAPON,
  },
  {
    time: oneMonthAgo,
    severity: Severity.HIGH,
    classification: EventClassification.FIRE_ARM,
  },
  {
    time: getDaysFromDate(-2),
    severity: Severity.LOW,
    classification: EventClassification.COLD_WEAPON,
  },
  {
    time: new Date(),
    severity: Severity.MEDIUM,
    classification: EventClassification.STONE_THROWING,
  },
  {
    time: getDaysFromDate(3, oneMonthAgo),
    severity: Severity.CRITICAL,
    classification: EventClassification.FIRE_ARM,
  },
  {
    time: getDaysFromDate(1, oneMonthAgo),
    severity: Severity.HIGH,
    classification: EventClassification.FIRE_ARM,
  },
  {
    time: oneMonthAgo,
    severity: Severity.MEDIUM,
    classification: EventClassification.FIRE_ARM,
  },
  {
    time: new Date(),
    severity: Severity.HIGH,
    classification: EventClassification.OTHER,
  },
];
