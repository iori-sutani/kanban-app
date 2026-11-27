import type { TaskResponseDto } from "../../dto/taskResponseDto.js";

export interface GetTasksUseCaseInterface {
  execute(): Promise<TaskResponseDto[]>;
}
