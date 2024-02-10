import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateUserDto {
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
}
