import { searchProducts, insertNewRegisterProducts, updateProductsInfo, deleteProducts } from '../Database/Repositories/product.repositories.js';

// Função para registrar as rotas
export default async function productsRoutes(fastify, opts) {

    // GET: Obter todos os produtos
    fastify.get('/products', async (request, reply) => {
        try {
            const products = await searchProducts();
            reply.send(products); // Retorna os produtos encontrados
        } catch (error) {
            console.error(error);
            reply.status(500).send({ error: 'Erro ao buscar produtos.' });
        }
    });

 // POST: Adicionar um novo produto
fastify.post('/products', async (request, reply) => {
    const { name, description, image_url, amount, quantity } = request.body;

    if (!name || !description || !amount || !quantity || !image_url) {
        return reply.status(400).send({ error: 'Por favor, preencha todos os campos.' });
    }

    try {
        const result = await insertNewRegisterProducts(name, description, image_url, amount, quantity);
        reply.status(201).send(result); // Responda com o resultado
    } catch (error) {
        console.error('Erro ao inserir produto:', error);
        reply.status(500).send({ error: 'Erro ao adicionar produto.' });
    }
});

    

    // PUT: Atualizar um produto existente
    fastify.put('/products/:id', async (request, reply) => {
        const { id } = request.params;
        const { name, description, image_url, amount, quantity } = request.body;

        try {
            const updatedProduct = await updateProductsInfo(id, name, description, image_url, amount, quantity);
            reply.send(updatedProduct); // Retorna o produto atualizado
        } catch (error) {
            console.error(error);
            reply.status(500).send({ error: 'Erro ao atualizar produto.' });
        }
    });

    // DELETE: Deletar um Produto
    fastify.delete('/products/:id', async (request, reply) => {
        const { id } = request.params;

        try {
            await deleteProducts(id);
            reply.send({ message: 'Produto deletado com sucesso!' }); // Confirma a exclusão
        } catch (error) {
            console.error(error);
            reply.status(500).send({ error: 'Erro ao deletar produto.' });
        }
    });
}
