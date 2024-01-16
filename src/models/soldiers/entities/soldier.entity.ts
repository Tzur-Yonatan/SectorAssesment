import {
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  PrimaryKey,
  DataType,
  Table,
} from 'sequelize-typescript';
import { AttendanceStatuses, SOLDIER_ID_LENGTH } from './soldier.types';

@Table({ underscored: true })
export class Soldier extends Model<Soldier> {
  @PrimaryKey
  @Column(DataType.STRING(SOLDIER_ID_LENGTH))
  id: string;

  @Column
  name: string;

  @Column(DataType.ENUM(...Object.values(AttendanceStatuses)))
  attendanceStatus: AttendanceStatuses;

  @CreatedAt
  CreatedAt: Date;

  @UpdatedAt
  UpdatedAt: Date;

  @DeletedAt
  DeletedAt: Date;
}
