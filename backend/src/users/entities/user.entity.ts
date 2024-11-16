import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @Column({ name: "Id"})
  id: number;

  @Column({ name: "Name" })
  name: string;

  @Column({ name: "Email" })
  email: string;

  @Column({ name: "Password" })
  password: string;

  @Column({ name: "Active" })
  active: boolean;
}
