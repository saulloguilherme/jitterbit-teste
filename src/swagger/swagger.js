import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Pedidos',
            version: '1.0.0',
            description: 'API para gerenciamento de pedidos',
        },
        servers: [{ url: 'http://localhost:3000/' }],
    },
    apis: ['./src/controllers/*.js', './src/models/*.js', './src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;