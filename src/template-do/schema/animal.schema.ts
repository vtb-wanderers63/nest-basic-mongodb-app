import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnimalDocument = HydratedDocument<Animal>;

@Schema()
export class Animal {
  @Prop({ required: true, type: String, unique: true })
  name: string;

  @Prop({
    required: true,
    type: String,
    enum: ['mammal', 'bird', 'reptile', 'amphibian', 'fish'],
  })
  type: string;

  @Prop({
    required: true,
    type: String,
    enum: ['herbivore', 'carnivore', 'omnivore'],
  })
  diet: string;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
