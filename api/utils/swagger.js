import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BOOKING APP Swagger Express API',
      version: '1.0.0',
      description: 'A simple Express API with Swagger documentation',

      license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      
      termsOfService: 'https://example.com/terms/',

      contact: {
        name: 'JSONPlaceholder',
        url: 'https://jsonplaceholder.typicode.com',
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}` ,
        description: 'Development server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to your API routes
};

const specs = swaggerJsdoc(options);



export default specs; 
