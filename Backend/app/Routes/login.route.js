import { searchLogin, insertNewRegisterLogin, updateLoginInfo, deleteLogin } from '../Database/Repositories/login.repositories.js';
import { searchAddressesByEmail, insertNewAddress } from '../Database/Repositories/address.repositories.js';

export default async function loginRoutes(fastify, opts) {
    // GET: Obter todos os logins
    fastify.get('/login', async (request, reply) => {
        try {
            const logins = await searchLogin();
            return reply.send(logins);
        } catch (error) {
            console.error(error);
            return reply.status(500).send({ error: 'Erro ao obter logins.' });
        }
    });

    // POST: Adicionar um novo login
    fastify.post('/login', async (request, reply) => {
        const { email, password, created_at, update_at, status } = request.body;

        if (!email || !password) {
            return reply.status(400).send({ error: 'Por favor, preencha todos os campos.' });
        }

        try {
            const newLogin = await insertNewRegisterLogin(email, password, created_at, update_at, status);
            return reply.status(201).send(newLogin);
        } catch (error) {
            console.error(error);
            return reply.status(500).send({ error: 'Erro ao criar login.' });
        }
    });

    // PUT: Atualizar um login existente
    fastify.put('/login/:id', async (request, reply) => {
        const { id } = request.params;
        const { password, created_at, update_at, status, email } = request.body;

        try {
            const updatedLogin = await updateLoginInfo(id, password, created_at, update_at, status, email);
            return reply.send(updatedLogin);
        } catch (error) {
            console.error(error);
            return reply.status(500).send({ error: error.message });
        }
    });

    // DELETE: Deletar um login
    fastify.delete('/login/:id', async (request, reply) => {
        const { id } = request.params;

        try {
            await deleteLogin(id);
            return reply.status(204).send();
        } catch (error) {
            console.error(error);
            return reply.status(500).send({ error: error.message });
        }
    });

    // POST: Autenticar um login existente
    fastify.post('/login/authenticate', async (request, reply) => {
        const { email, password } = request.body;

        if (!email || !password) {
            return reply.status(400).send({ error: 'Por favor, preencha todos os campos.' });
        }

        try {
            const logins = await searchLogin();
            const user = logins.find(user => user.email === email && user.password === password);

            if (!user) {
                return reply.status(401).send({ error: 'Credenciais inválidas.' });
            }

            return reply.send({ message: 'Login bem-sucedido', user });
        } catch (error) {
            console.error(error);
            return reply.status(500).send({ error: 'Erro ao autenticar.' });
        }
    });

    // Adicionar novo endereço
    // fastify.post('/login/:email/address', async (request, reply)  => {
    //     const { email } = request.params;
    //     const { street, city, state, zip_code } = request.body;

    //     if (!street || !city || !state || !zip_code) {
    //         return reply.status(400).send({ error: 'Todos os campos de endereço são necessários.' });
    //     }

    //     try {
    //         const newAddress = await insertNewAddress(email, street, city, state, zip_code);
    //         return reply.status(201).send(newAddress);
    //     } catch (error) {
    //         console.error(error);
    //         return reply.status(500).send({ error: 'Erro ao adicionar endereço.' });
    //     }
    // });

   
}
