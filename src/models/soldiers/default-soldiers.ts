import { CreateSoldier } from './dto/create-soldier.dto';
import { AttendanceStatuses } from './entities/soldier.types';

export const defaultSoldiers: CreateSoldier[] = [
  {
    id: '8866411',
    name: 'יונה הנביא',
    attendanceStatus: AttendanceStatuses.PRESENT,
  },
  {
    id: '9999999',
    name: 'איש הר-בטן',
    attendanceStatus: AttendanceStatuses.PRESENT,
  },
  {
    id: '1234567',
    name: 'גייב הזורח',
    attendanceStatus: AttendanceStatuses.SICK,
  },
  {
    id: '4204204',
    name: 'רוטב איי! קקטוס',
    attendanceStatus: AttendanceStatuses.VACATION,
  },
  {
    id: '8712632',
    name: 'מר תפוד',
    attendanceStatus: AttendanceStatuses.SICK,
  },
  {
    id: '8763242',
    name: 'אלכס תזי',
    attendanceStatus: AttendanceStatuses.PRESENT,
  },
  {
    id: '2374891',
    name: 'יצחק לא-לענות',
    attendanceStatus: AttendanceStatuses.VACATION,
  },
  {
    id: '7346197',
    name: 'דניאל וכן',
    attendanceStatus: AttendanceStatuses.PRESENT,
  },
  {
    id: '1234321',
    name: 'של טפר',
    attendanceStatus: AttendanceStatuses.SICK,
  },
];
