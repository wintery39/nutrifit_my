import { ApiProperty } from "@nestjs/swagger";
import { IsString ,Length} from "class-validator";
export namespace AuthDTO {
    export class SignUp {
      @ApiProperty({
        example: 'honggildong',
        description: 'user_id',
      })
      @IsString()
      user_id: string;

      @ApiProperty({
        example: '12345678!',
        description: 'user_password',
      })
      @IsString()
      @Length(4, 20)
      user_password: string;
    }
  
    export class SignIn {
      @ApiProperty({
        example: 'honggildong',
        description: 'user_id',
      })
      @IsString()
      user_id: string;
  
      @ApiProperty({
        example: '12345678!',
        description: 'user_password',
      })
      @IsString()
      @Length(4, 20)
      user_password: string;
    }
  }