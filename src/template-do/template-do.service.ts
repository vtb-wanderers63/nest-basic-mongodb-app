import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Animal } from './schema/animal.schema';
import { Model } from 'mongoose';

@Injectable()
export class AnimalsService {
  constructor(@InjectModel(Animal.name) private animalModel: Model<Animal>) {}
  create(createAnimalDto: CreateAnimalDto) {
    const createdAnimal = new this.animalModel(createAnimalDto);
    return createdAnimal.save();
  }

  findAll(): Promise<Animal[]> {
    return this.animalModel.find().exec();
  }

  findOne(id) {
    return this.animalModel.findById(id).exec();
  }

  update(id: string, updateAnimalDto: UpdateAnimalDto) {
    return this.animalModel
      .findByIdAndUpdate(id, { $set: updateAnimalDto })
      .exec();
  }

  remove(id) {
    return this.animalModel.findByIdAndDelete(id).exec();
  }
}
