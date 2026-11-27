import type { MoveTaskRequestDto } from "../../dto/moveTaskRequestDto.js";
import type { TaskResponseDto } from "../../dto/taskResponseDto.js";

export interface MoveTaskUseCaseInterface {
  execute(request: MoveTaskRequestDto): Promise<TaskResponseDto>;
}
