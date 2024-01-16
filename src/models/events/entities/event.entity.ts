import {
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  PrimaryKey,
  AutoIncrement,
  DataType,
  Table,
} from 'sequelize-typescript';
import { Severity } from 'types/severity.type';
import { EventClassification } from './event.types';

@Table({ underscored: true })
export class Event extends Model<Event> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  time: Date;

  @Column(DataType.ENUM(...Object.values(Severity)))
  severity: Severity;

  @Column(DataType.ENUM(...Object.values(EventClassification)))
  classification: EventClassification;

  @CreatedAt
  CreatedAt: Date;

  @UpdatedAt
  UpdatedAt: Date;

  @DeletedAt
  DeletedAt: Date;
}
