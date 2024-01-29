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

    @Column({ name: 'water', type: 'double'})
    water: number;

    @Column({ name: 'protein', type: 'double'})
    protein: number;

    @Column({ name: 'mineral', type: 'double'})
    mineral: number;

    @Column({ name: 'fat', type: 'double'})
    fat: number;

    @Column({ name: 'weight', type: 'double'})
    weight: number;

    @Column({ name: 'muscle', type: 'double'})
    muscle: number;

    @Column({ name: 'todays', type: 'varchar', length: 1000 })
    todays: string;

    @Column({ name: 'today_energy', type: 'double'})
    today_energy: number;

    @Column({ name: 'today_water', type: 'double'})
    today_water: number;

    @Column({ name: 'today_protein', type: 'double'})
    today_protein: number;

    @Column({ name: 'today_fat', type: 'double'})
    today_fat: number;

    @Column({ name: 'today_carbohydrate', type: 'double'})
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