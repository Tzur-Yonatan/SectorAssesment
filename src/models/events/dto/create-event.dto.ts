import { Severity } from '../../../types/severity.type';
import { EventClassification } from '../entities/event.types';

export interface CreateEvent {
  time: Date;
  severity: Severity;
  classification: EventClassification;
}
