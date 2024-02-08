import {
  BeforeInsert,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Entity({ schema: 'users_study', name: 'users' })
export class User {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
    id: number;
  
    @Column({ name: 'user_id', type: 'varchar', length: 100 })
    user_id: string;
  
    @Column({ name: 'password', type: 'varchar', length: 100 })
    user_password: string;

    @Column({ name: 'height', type: 'float'})
    height: number;

    @Column({ name: 'weight', type: 'float'})
    weight: number;

    @Column({ name: 'age', type: 'int'})
    age: number;

    @Column({ name: 'activity', type: 'int'})
    activity: number;

    @Column({ name: 'gender', type: 'varchar', length: 10})
    gender: string;

    @Column({ name: 'todays', type: 'varchar', length: 1000 })
    todays: string;

    @Column({ name: 'today_energy', type: 'float'})
    today_energy: number;

    @Column({ name: 'today_water', type: 'float'})
    today_water: number;

    @Column({ name: 'today_protein', type: 'float'})
    today_protein: number;

    @Column({ name: 'today_fat', type: 'float'})
    today_fat: number;

    @Column({ name: 'today_carbohydrate', type: 'float'})
    today_carbohydrate: number;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;

    @BeforeInsert()
    private beforeInsert() {
      this.user_password = bcrypt.hashSync(this.user_password, 10);
    }
  }