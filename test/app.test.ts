import request from 'supertest';
import mongoose from 'mongoose';
import DogBreed from '../src/models/DogBreed';
import app from '../src/app';
import server from '../src/index';


// Clean up the database after each test
afterEach(async () => {
  await DogBreed.deleteMany({});
});

// Close the MongoDB connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
  server.close();
});

describe('GraphQL API', () => {


  it('should fetch all dog breeds', async () => {
    const breed = new DogBreed({ name: "Labrador", origin: "Canada", description: "Friendly dog" });
    await breed.save();

    const query = `
      {
        getAllBreeds {
          name
          origin
        }
      }
    `;

    const res = await request(app)
        .post('/dog-breeds')
        .send({ query });

    expect(res.body.data.getAllBreeds.length).toBe(1);
    expect(res.body.data.getAllBreeds[0].name).toBe('Labrador');
  });

  it('should fetch a dog breed by name', async () => {
    const breed = new DogBreed({ name: "Poodle", origin: "Germany", description: "Smart and active" });
    await breed.save();

    const query = `
      {
        getBreed(name: "${breed.name}") {
          name
          origin
        }
      }
    `;

    const res = await request(app)
        .post('/dog-breeds')
        .send({ query });

    expect(res.body.data.getBreed.name).toBe('Poodle');
  });

    it('should create a new dog breed', async () => {
        const mutation = `
      mutation {
        createBreed(name: "Bulldog", origin: "England", description: "Sturdy little dog") {
          name
          origin
          description
        }
      }
    `;


        const res = await request(app)
            .post('/dog-breeds')
            .send({ query :mutation })
            .set('Content-Type', 'application/json')
        expect(res.body.data.createBreed.name).toBe('Bulldog');
    });

});

