import { ApiProperty } from '@nestjs/swagger';

export class CreateAnimalDto {
  @ApiProperty({
    description: 'The animals name',
    type: String,
    required: true,
  })
  name: string;

  @ApiProperty({
    description: 'The animal type',
    type: String,
    required: true,
  })
  type: string;

  @ApiProperty({
    description: 'The animals diet',
    type: String,
    required: true,
  })
  diet: string;
}
