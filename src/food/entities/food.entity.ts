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
  
    @Column({ name: '연도', type: 'varchar', length: 255 })
    year: string;

    @Column({ name: '채취시기', type: 'varchar', length: 255 })
    season: string;

    @Column({ name: '식품대분류', type: 'varchar', length: 255 })
    food_big_group: string;

    @Column({ name: '식품상세분류', type: 'varchar', length: 255 })
    food_small_group: string;

    @Column({ name: '일회제공량', type: 'varchar', length: 255 })
    once: string;

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

    @Column({ name: '자당_g', type: 'float' })
    fructose_g: number;

    @Column({ name: '포도당_g', type: 'float' })
    glucose_g: number;

    @Column({ name: '과당_g', type: 'float' })
    galactose_g: number;

    @Column({ name: '유당_g', type: 'float' })
    lactose_g: number;

    @Column({ name: '맥아당_g', type: 'float' })
    maltose_g: number;

    @Column({ name: '총_식이섬유_g', type: 'float' })
    dietary_fiber_g: number;

    @Column({ name: '칼슘_mg', type: 'float' })
    calcium_mg: number;

    @Column({ name: '철_mg', type: 'float' })
    iron_mg: number;

    @Column({ name: '철_ug', type: 'float' })
    iron_ug: number;

    @Column({ name: '마그네슘_mg', type: 'float' })
    magnesium_mg: number;

    @Column({ name: '인_mg', type: 'float' })
    phosphorus_mg: number;

    @Column({ name: '칼륨_mg', type: 'float' })
    potassium_mg: number;

    @Column({ name: '나트륨_mg', type: 'float' })
    sodium_mg: number;

    @Column({ name: '아연_mg', type: 'float' })
    zinc_mg: number;

    @Column({ name: '구리_mg', type: 'float' })
    copper_mg: number;
}