import type { TaskRepositoryInterface } from "../../../domain/taskRepositoryInterface.js";
import type { MoveTaskRequestDto } from "../../dto/moveTaskRequestDto.js";
import { toTaskResponseDto, type TaskResponseDto } from "../../dto/taskResponseDto.js";
import type { MoveTaskUseCaseInterface } from "./moveTaskUseCaseInterface.js";

export class MoveTaskUseCase implements MoveTaskUseCaseInterface {
  constructor(private readonly taskRepository: TaskRepositoryInterface) {}

  async execute(request: MoveTaskRequestDto): Promise<TaskResponseDto> {
    const task = await this.taskRepository.findById(request.id);
    if (!task) throw new Error("タスクが見つかりません");

    task.changeStatus(request.status);
    await this.taskRepository.save(task);
    return toTaskResponseDto(task);
  }
}
