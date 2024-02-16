import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class searchFoodDto{
    @ApiProperty({
        example: 200,
        description: '에너지',
    })
    @IsNotEmpty()
    energy_kcal: number;

    @ApiProperty({
        example: 200,
        description: '수분',
    })
    @IsNotEmpty()
    water_g!: number;

    @ApiProperty({
        example: 200,
        description: '단백질',
    })
    @IsNotEmpty()
    protein_g: number;

    @ApiProperty({
        example: 200,
        description: '지방',
    })
    @IsNotEmpty()
    fat_g: number;

    @ApiProperty({
        example: 200,
        description: '탄수화물',
    })
    @IsNotEmpty()
    carbohydrate_g: number;

    @ApiProperty({
        example: [20, 30, 20, 20, 10],
        description: '영양성분 비율',
    })
    nutrifit_percent: number[];
}