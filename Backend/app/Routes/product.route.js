import db from "../connect.db.js"
import {  searchProducts, insertNewRegisterProducts, updateProductsInfo,deleteProducts  } from '../Database/Repositories/product.repositories.js';


// Função para registrar as rotas
export default async function userRoutes(fastify, opts) {

    // GET: Obter todos os usuários
    fastify.get('/products', async (request, reply) => {
        

        searchProducts()
       
        
    });

    // POST: Adicionar um novo produto
    fastify.post('/products', async (request, reply) => {
        // No POST, esperamos que o cliente envie um novo usuário para ser adicionado
        const { name, description, image_url,amount, quantity } = request.body; // Pegamos os dados enviados no corpo da requisição

        // Verificamos se todos os campos obrigatórios foram enviados
        if (!name || !description || !amount ) {
            // Se algum campo estiver faltando, retornamos um erro 400 (requisição malformada)
            return reply.status(400).send({ error: 'Por favor, preencha todos os campos.' });


        }
        insertNewRegisterProducts(name, description, image_url,amount, quantity)
    
    });



    // PUT: Atualizar um produto existente
    fastify.put('/products/:id', async (request, reply) => {
       
        const { id } = request.params;
        const { name, description, image_url,amount, quantity} = request.body; 


        updateProductsInfo(id)

    });
        

    // DELETE: Deletar um Produto
    fastify.delete('/products/:id', async (request, reply) => {
        // No DELETE, o cliente envia o ID do usuário que deseja excluir
        const { id } = request.params; // Pegamos o ID a partir dos parâmetros da URL


        deleteProducts(id)
       
    });
}
