import { ApiProperty } from "@nestjs/swagger";
import { IsString ,Length} from "class-validator";
export namespace AuthDTO {
    export class checkID {
      @ApiProperty({
        example: 'honggildong',
        description: 'user_id',
      })
      @Length(4, 20)
      @IsString()
      user_id: string;
    }

    export class checkPassword {
      @ApiProperty({
        example: '12345678!',
        description: 'user_password',
      })
      @Length(4, 20)
      @IsString()
      user_password: string;
    }
    
    export class checkEmail {
      @ApiProperty({
        example: 1,
        description: 'user_id',
      })
      id: number;
      @ApiProperty({
        example: '524372',
        description: 'code',
      })
      @IsString()
      code: string;
    }
    

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
      @Length(4, 20)
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