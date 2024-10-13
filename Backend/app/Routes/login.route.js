import db from '../connect.db.js'; // Importa a conexão com o banco de dados
import { searchLogin, insertNewRegisterLogin ,updateLoginInfo, deleteLogin } from '../Database/Repositories/login.repositories.js'


// Função para registrar as rotas
 export default async function userRoutes(fastify, opts) {

     // GET: Obter todos os usuários
     fastify.get('/login', async (request, reply) => {

        searchLogin()
        
    });

    // POST: Adicionar um novo usuário
    fastify.post('/login', async (request, reply) => {
         // 
         const { password,created_at,update_at,status,email} = request.body;

         // Verificamos se todos os campos obrigatórios foram enviados
         if ( !email || !password) {
            // Se algum campo estiver faltando, retornamos um erro 400 (requisição malformada)
            return reply.status(400).send({ error: 'Por favor, preencha todos os campos.' });


         }
         
         insertNewRegisterLogin( password,created_at,update_at,status,email)
        //  insertNewRegisterUser(name, cpf, status, created_at , update_at );
     });



     // PUT: Atualizar um usuário existente
     fastify.put('/users/:id', async (request, reply) => {
         
         const { id } = request.params; 
         const { password,created_at,update_at,status,email} = request.body; 
         updateLoginInfo(id)

    });
        

    // DELETE: Deletar um usuário    
    fastify.delete('/users/:id', async (request, reply) => {
         // No DELETE, o cliente envia o ID do usuário que deseja excluir
         const { id } = request.params; // Pegamos o ID a partir dos parâmetros da URL

         deleteLogin(id)
       
     });
}