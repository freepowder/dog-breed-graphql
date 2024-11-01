import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import DogBreed, { IDogBreed } from '../models/DogBreed';  // Import your DogBreed model

// MongoDB Connection
const mongoURI = '';
mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB connected')
       seedBreeds();
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Function to seed the database
const seedBreeds = async () => {
    try {
        // Read dog breeds data from JSON file
        const filePath = path.join(__dirname, './seed.json');
        const data = fs.readFileSync(filePath, 'utf-8');
        const breeds: IDogBreed[] = JSON.parse(data);

        // Insert dog breeds into the database
        await DogBreed.insertMany(breeds);
        console.log('Dog breeds inserted successfully!');

        // Close MongoDB connection after seeding
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

// Run the seed function

