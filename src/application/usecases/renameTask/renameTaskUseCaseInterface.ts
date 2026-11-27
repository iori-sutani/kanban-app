import type { RenameTaskRequestDto } from "../../dto/renameTaskRequestDto.js";
import type { TaskResponseDto } from "../../dto/taskResponseDto.js";

export interface RenameTaskUseCaseInterface {
  execute(request: RenameTaskRequestDto): Promise<TaskResponseDto>;
}
