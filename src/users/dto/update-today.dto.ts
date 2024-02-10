import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateTodayDto {
    @ApiProperty({
        example: '',
        description: '오늘 먹은 음식',
    })
    @IsString()
    @MaxLength(1000)
    todays!: string;

    @ApiProperty({
        example: 0,
        description: '오늘의 에너지',
    })
    @IsNotEmpty()
    today_energy!: number;

    @ApiProperty({
        example: 0,
        description: '오늘 섭취한 수분',
    })
    @IsNotEmpty()
    today_water!: number;

    @ApiProperty({
        example: 0,
        description: '오늘 섭취한 단백질',
    })
    @IsNotEmpty()
    today_protein!: number;

    @ApiProperty({
        example: 0,
        description: '오늘 섭취한 지방',
    })
    @IsNotEmpty()
    today_fat!: number;

    @ApiProperty({
        example: 0,
        description: '오늘 섭취한 탄수화물',
    })
    @IsNotEmpty()
    today_carbohydrate!: number;
} 