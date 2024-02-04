import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class searchFoodDto{
    @ApiProperty({
        example: 0,
        description: '에너지',
    })
    @IsNotEmpty()
    energy_kcal: number;

    @ApiProperty({
        example: 0,
        description: '수분',
    })
    @IsNotEmpty()
    water_g!: number;

    @ApiProperty({
        example: 0,
        description: '단백질',
    })
    @IsNotEmpty()
    protein_g: number;

    @ApiProperty({
        example: 0,
        description: '지방',
    })
    @IsNotEmpty()
    fat_g: number;

    @ApiProperty({
        example: 0,
        description: '탄수화물',
    })
    @IsNotEmpty()
    carbohydrate_g: number;
}