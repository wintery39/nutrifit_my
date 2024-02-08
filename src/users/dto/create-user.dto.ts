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
    example: 180.1,
    description: 'user height',
  })
  @IsNotEmpty()
  height!: number;

  @ApiProperty({
    example: 70.1,
    description: 'user weight',
  })
  @IsNotEmpty()
  weight!: number;

  @ApiProperty({
    example: 25,
    description: 'user age',
  })
  @IsNotEmpty()
  age!: number;

  @ApiProperty({
    example: 1,
    description: 'user activity',
  })
  @IsNotEmpty()
  activity!: number;

  @ApiProperty({
    example: '남',
    description: 'user gender',
  })
  @IsNotEmpty()
  @IsString()
  gender!: string;

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
