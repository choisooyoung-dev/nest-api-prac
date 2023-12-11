// DTO
// 계층 간 데이터 전송을 위해 모델 대신 사용되는 객체
// 어떠한 비즈니스 로직을 가져서는 안되고, 순수하게 데이터 저장, getter, setter 만 가져야 된다.

// pipe - 유효성 검사
import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
