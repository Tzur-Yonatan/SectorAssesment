import { Model, Column, Table } from 'sequelize-typescript';

@Table({ underscored: true })
export class PlzDontLookHere extends Model<PlzDontLookHere> {
  @Column
  justDontAddAnything: string;
}
