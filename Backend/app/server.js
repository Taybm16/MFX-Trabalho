import Fastify from 'fastify';
import userRoutes from './Routes/users.route.js';
import productsRoutes from './Routes/product.route.js';
import loginRoutes from './Routes/login.route.js';

const fastify = Fastify({
    logger: true,
});

// Habilitando CORS
fastify.register(import('@fastify/cors'), {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

// Registrando as rotas
fastify.register(userRoutes);
fastify.register(productsRoutes);
fastify.register(loginRoutes); // Aqui é onde você registra as rotas de login

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Servidor rodando em ${address}`);
});
