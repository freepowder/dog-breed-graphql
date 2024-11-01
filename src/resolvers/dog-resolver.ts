import DogBreed, { IDogBreed } from '../models/DogBreed';


const DogRoot = {
  getAllBreeds: async (): Promise<IDogBreed[]> => {
    return await DogBreed.find();
  },
  getBreed: async ({ name }: { name: string }): Promise<IDogBreed | null> => {
    return DogBreed.findOne({name: name});
  },
  createBreed: async ({ name, origin, description }: { name: string, origin?: string, description?: string }): Promise<IDogBreed> => {
    const breed = new DogBreed({ name, origin, description });
    await breed.save();
    return breed;
  },
};

export default DogRoot;
