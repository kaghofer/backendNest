import { UsePipes, ValidationPipe } from "@nestjs/common";

export const Validate = () => UsePipes(ValidationPipe);