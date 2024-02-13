import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ schema: 'food_info', name: 'food_info' })
export class FOOD {
    @PrimaryGeneratedColumn({ name: 'NO', type: 'int' })
    NO: number;

    @Column({ name: 'SAMPLE_ID', type: 'varchar', length: 255 })
    SAMPLE_ID: string;
  
    @Column({ name: '식품코드', type: 'varchar', length: 255 })
    food_code: string;

    @Column({ name: 'DB군', type: 'varchar', length: 255 })
    DB_group: string;

    @Column({ name: '상용제품', type: 'varchar', length: 255 })
    product: string;

    @Column({ name: '식품명', type: 'varchar', length: 255 })
    food_name: string;

    @Column({ name: '연도', type: 'int'})
    year: number;

    @Column({ name: '지역_제조사', type: 'varchar', length: 255 })
    region: string;

    @Column({ name: '식품대분류', type: 'varchar', length: 255 })
    food_big_group: string;

    @Column({ name: '식품상세분류', type: 'varchar', length: 255 })
    food_small_group: string;

    @Column({ name: '일회제공량', type: 'float'})
    once: number;

    @Column({ name: '내용량_단위', type: 'varchar', length: 255 })
    content_unit: string;

    @Column({ name: '총내용량_g', type: 'float' })
    content_g: number;

    @Column({ name: '총내용량_mL', type: 'float' })
    content_ml: number;

    @Column({ name: '에너지_kcal',type: 'float' })
    energy_kcal: number;

    @Column({ name: '수분_g', type: 'float' })
    water_g: number;

    @Column({ name: '단백질_g', type: 'float' })
    protein_g: number;

    @Column({ name: '지방_g', type: 'float' })
    fat_g: number;

    @Column({ name: '탄수화물_g', type: 'float' })
    carbohydrate_g: number;

    @Column({ name: '총당류_g', type: 'float' })
    sugar_g: number;

    @Column({ name: '칼슘_mg', type: 'float' })
    calcium_mg: number;
}