import { IsString ,Length} from "class-validator";
export namespace AuthDTO {
    export class SignUp {
      @IsString()
      user_id: string;
  
      @IsString()
      @Length(4, 20)
      user_password: string;
    }
  
    export class SignIn {
      @IsString()
      user_id: string;
  
      @IsString()
      @Length(4, 20)
      user_password: string;
    }
  }