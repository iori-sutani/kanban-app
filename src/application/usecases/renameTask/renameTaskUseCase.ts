import type { TaskRepositoryInterface } from "../../../domain/taskRepositoryInterface.js";
import type { RenameTaskRequestDto } from "../../dto/renameTaskRequestDto.js";
import { toTaskResponseDto, type TaskResponseDto } from "../../dto/taskResponseDto.js";
import type { RenameTaskUseCaseInterface } from "./renameTaskUseCaseInterface.js";

export class RenameTaskUseCase implements RenameTaskUseCaseInterface {
  constructor(private readonly taskRepository: TaskRepositoryInterface) {}

  async execute(request: RenameTaskRequestDto): Promise<TaskResponseDto> {
    if (request.title.trim() === "") throw new Error("タイトルは必須です");

    const task = await this.taskRepository.findById(request.id);
    if (!task) throw new Error("タスクが見つかりません");

    task.rename(request.title);
    await this.taskRepository.save(task);
    return toTaskResponseDto(task);
  }
}
