import { AttendanceStatuses } from '../entities/soldier.types';

export interface CreateSoldier {
  id: string;
  name: string;
  attendanceStatus: AttendanceStatuses;
}
