
import { insertNewRegisterUser, searchUsers, updateUserInfo, deleteUser } from '../Database/Repositories/users.repositories.js';

// Função para registrar as rotas
export default async function userRoutes(fastify, opts) {

  // GET: Obter todos os usuários
  fastify.get('/users', async (request, reply) => {
    try {
      const users = await searchUsers();
      reply.send(users);
    } catch (error) {
      reply.status(500).send({ error: 'Erro ao buscar usuários.' });
    }
  });

  // POST: Adicionar um novo usuário
  fastify.post('/users', async (request, reply) => {
    const { name, cpf, status, created_at, update_at } = request.body;

    // Verificamos se todos os campos obrigatórios foram enviados
    if (!name || !cpf) {
      return reply.status(400).send({ error: 'Por favor, preencha todos os campos.' });
    }

    try {
      const newUser = await insertNewRegisterUser(name, cpf, status, created_at, update_at);
      reply.status(201).send(newUser); // Retorna o novo usuário criado
    } catch (error) {
      reply.status(500).send({ error: 'Erro ao adicionar usuário.' });
    }
  });

  // PUT: Atualizar um usuário existente
  fastify.put('/users/:id', async (request, reply) => {
    const { id } = request.params;
    const { name, email, cpf, status, created_at, update_at, password } = request.body;

    try {
      const updatedUser = await updateUserInfo(id, { name, email, cpf, status, created_at, update_at, password });
      reply.send(updatedUser);
    } catch (error) {
      reply.status(500).send({ error: 'Erro ao atualizar usuário.' });
    }
  });

  // DELETE: Deletar um usuário
  fastify.delete('/users/:cpf', async (request, reply) => {
    const { cpf } = request.params;

    try {
      await deleteUser(cpf);
      reply.status(204).send(); // No content
    } catch (error) {
      reply.status(500).send({ error: 'Erro ao deletar usuário.' });
    }
  });
}
