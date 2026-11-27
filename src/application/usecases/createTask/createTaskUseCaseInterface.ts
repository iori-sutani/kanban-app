import type { CreateTaskRequestDto } from "../../dto/createTaskRequestDto.js";
import type { TaskResponseDto } from "../../dto/taskResponseDto.js";

export interface CreateTaskUseCaseInterface {
  execute(request: CreateTaskRequestDto): Promise<TaskResponseDto>;
}
