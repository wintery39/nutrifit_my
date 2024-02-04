import { ApiProperty } from '@nestjs/swagger';
import {
    IsString,
    MaxLength,
    MinLength,
    IsNotEmpty,
    IsBoolean,
} from 'class-validator';  

export class CreateUserDto {
  @ApiProperty({
    example: 'honggildong',
    description: 'user id',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  user_id!: string;

  @ApiProperty({
    example: '12345678!',
    description: 'user password',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  user_password!: string;

  @ApiProperty({
    example: 0,
    description: '체수분',
  })
  @IsNotEmpty()
  water!: number;

  @ApiProperty({
    example: 0,
    description: '단백질',
  })
  @IsNotEmpty()
  protein!: number;

  @ApiProperty({
    example: 0,
    description: '무기질',
  })
  @IsNotEmpty()
  mineral!: number;

  @ApiProperty({
    example: 0,
    description: '체지방',
  })
  @IsNotEmpty()
  fat!: number;

  @ApiProperty({
    example: 0,
    description: '체중',
  })
  @IsNotEmpty()
  weight!: number;

  @ApiProperty({
    example: 0,
    description: '골격근량',
  })
  @IsNotEmpty()
  muscle!: number;

  @ApiProperty({
    example: '12345_1/23456_3',
    description: '먹은거 저장',
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
    description: '오늘의 체수분',
  })
  @IsNotEmpty()
  today_water!: number;

  @ApiProperty({
    example: 0,
    description: '오늘의 단백질',
  })
  @IsNotEmpty()
  today_protein!: number;

  @ApiProperty({
    example: 0,
    description: '오늘의 체지방',
  })
  @IsNotEmpty()
  today_fat!: number;

  @ApiProperty({
    example: 0,
    description: '오늘의 탄수화물',
  })
  @IsNotEmpty()
  today_carbohydrate!: number;
}
