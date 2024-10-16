import db from '../Database/connect.db.js';


 // Importa a conexão com o banco de dado
import { insertNewRegisterUser, searchUsers, updateUserInfo, deleteUser } from '../Database/Repositories/users.repositories.js';



// // Função para registrar as rotas
export default async function userRoutes(fastify, opts) {

  // GET: Obter todos os usuários
    fastify.get('/users', async (request, reply) => {

        searchUsers()

    });

    // POST: Adicionar um novo usuário
    fastify.post('/users', async (request, reply) => {
       // 
       const { name, cpf, status, created_at , update_at} = request.body;

       // Verificamos se todos os campos obrigatórios foram enviados
        if (!name || !cpf) {
           // Se algum campo estiver faltando, retornamos um erro 400 (requisição malformada)
           return reply.status(400).send({ error: 'Por favor, preencha todos os campos.' });

         }
        insertNewRegisterUser(name, cpf, status, created_at , update_at );
    });



     // PUT: Atualizar um usuário existente
     fastify.put('/users/:id', async (request, reply) => {
        // No PUT, esperamos que o cliente envie um ID de um usuário para atualizar, junto com os novos dados
        const { id } = request.params; // Pegamos o ID do usuário a partir dos parâmetros da URL
         const {  name, email, cpf, status, created_at , update_at,password} = request.body; // Pegamos os novos dados enviados no corpo da requisição


         updateUserInfo(id)

     });


     // DELETE: Deletar um usuário
     fastify.delete('/users/:id', async (request, reply) => {
         // No DELETE, o cliente envia o ID do usuário que deseja excluir
         const { id } = request.params; // Pegamos o ID a partir dos parâmetros da URL


         deleteUser(id)

     });
 }
