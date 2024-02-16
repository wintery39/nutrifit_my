import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class todaysFoodDto{
    @ApiProperty({
        example: '1508^100^사과, 생것\\3380^1006^고등어',
        description: '오늘 먹은 음식',
    })
    todaysfood: string;
}