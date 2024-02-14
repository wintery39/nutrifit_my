import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class todaysFoodDto{
    @ApiProperty({
        example: '1_100,2_100,3_100',
        description: '오늘 먹은 음식',
    })
    todaysfood: string;
}