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

    @Column({ name: '제조사', type: 'varchar', length: 255 })
    local: string;

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

    @Column({ name: '총내용량_g', type: 'varchar', length: 255 })
    content_g: string;

    @Column({ name: '총내용량_mL', type: 'varchar', length: 255 })
    content_ml: string;

    @Column({ name: '에너지_kcal', type: 'varchar', length: 255 })
    energy_kcal: string;

    @Column({ name: '수분_g', type: 'varchar', length: 255 })
    water_g: string;

    @Column({ name: '단백질_g', type: 'varchar', length: 255 })
    protein_g: string;

    @Column({ name: '지방_g', type: 'varchar', length: 255 })
    fat_g: string;

    @Column({ name: '탄수화물_g', type: 'varchar', length: 255 })
    carbohydrate_g: string;

    @Column({ name: '총당류_g', type: 'varchar', length: 255 })
    sugar_g: string;

    @Column({ name: '자당_g', type: 'varchar', length: 255 })
    fructose_g: string;

    @Column({ name: '포도당_g', type: 'varchar', length: 255 })
    glucose_g: string;

    @Column({ name: '과당_g', type: 'varchar', length: 255 })
    galactose_g: string;

    @Column({ name: '유당_g', type: 'varchar', length: 255 })
    lactose_g: string;

    @Column({ name: '맥아당_g', type: 'varchar', length: 255 })
    maltose_g: string;

    @Column({ name: '총_식이섬유_g', type: 'varchar', length: 255 })
    dietary_fiber_g: string;

    @Column({ name: '칼슘_mg', type: 'varchar', length: 255 })
    calcium_mg: string;

    @Column({ name: '철_mg', type: 'varchar', length: 255 })
    iron_mg: string;

    @Column({ name: '철_ug', type: 'varchar', length: 255 })
    iron_ug: string;

    @Column({ name: '마그네슘_mg', type: 'varchar', length: 255 })
    magnesium_mg: string;

    @Column({ name: '인_mg', type: 'varchar', length: 255 })
    phosphorus_mg: string;

    @Column({ name: '칼륨_mg', type: 'varchar', length: 255 })
    potassium_mg: string;

    @Column({ name: '나트륨_mg', type: 'varchar', length: 255 })
    sodium_mg: string;

    @Column({ name: '아연_mg', type: 'varchar', length: 255 })
    zinc_mg: string;

    @Column({ name: '구리_mg', type: 'varchar', length: 255 })
    copper_mg: string;
}