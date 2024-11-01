import {buildSchema} from "graphql";


const DogSchema = buildSchema(`
          type DogBreed {
            id: ID!
            name: String!
            origin: String
            description: String
          }
        
          type Query {
            getAllBreeds: [DogBreed]
            getBreed(name: String): DogBreed
          }
        
          type Mutation {
            createBreed(name: String!, origin: String, description: String): DogBreed
          }
        `);

export default DogSchema
