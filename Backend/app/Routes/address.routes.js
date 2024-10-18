import { insertNewAddress, updateAddress, deleteAddress, searchAddressesByEmail } from '../Database/Repositories/address.repositories.js';

export default async function addressRoutes(fastify, opts) {
    
    
fastify.post('/login/email/address', async (req, res) => {
    const { email } = req.params; // Obtém o email da URL
    const { street, city, zip_code, number, state, country } = req.body;

    // Log dos dados recebidos
    console.log('Dados recebidos:', { email, street, city, zip_code, number, state, country });

    // Validação dos campos
    if (!state) {
        return res.status(400).json({ message: 'O campo "state" é obrigatório.' });
    }

    try {
        const newAddress = await insertNewAddress(email, street, city, zip_code, number, state, country);
        return res.status(201).json(newAddress);
    } catch (error) {
        console.error('Erro ao inserir endereço:', error);
        return res.status(500).json({ message: 'Erro ao adicionar endereço.', error: error.message });
    }
});
    // Buscar endereços pelo email do login
    fastify.get('/login/:email/address', async (request, reply) => {
        const { email } = request.params;

        try {
            const addresses = await searchAddressesByEmail(email);
            return reply.send(addresses);
        } catch (error) {
            console.error(error);
            return reply.status(500).send({ error: 'Erro ao buscar endereços.' });
        }
    });

    // Atualizar endereço
    fastify.put('/login/:email/address/:addressId', async (request, reply) => {
        const { email, addressId } = request.params;
        const { street, city, state, zip_code } = request.body;

        if (!street || !city || !state || !zip_code) {
            return reply.status(400).send({ error: 'Todos os campos de endereço são necessários.' });
        }

        try {
            const updatedAddress = await updateAddress(addressId, street, city, state, zip_code);
            return reply.send(updatedAddress);
        } catch (error) {
            console.error(error);
            return reply.status(500).send({ error: 'Erro ao atualizar endereço.' });
        }
    });

    // Deletar endereço
    fastify.delete('/login/:email/address/:addressId', async (request, reply) => {
        const { addressId } = request.params;

        try {
            await deleteAddress(addressId);
            return reply.status(204).send(); // Retorna 204 No Content após deletar
        } catch (error) {
            console.error(error);
            return reply.status(500).send({ error: 'Erro ao deletar endereço.' });
        }
    });
}
