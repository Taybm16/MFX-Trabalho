import Fastify from 'fastify';


import userRoutes from './Routes/users.route.js';

const fastify = Fastify({ logger: true });

// Registrando as rotas de usuários
fastify.register(userRoutes);

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Servidor rodando em ${address}`);
});


