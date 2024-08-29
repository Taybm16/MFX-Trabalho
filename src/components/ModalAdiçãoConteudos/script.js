document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário para uma página diferente
    
    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-description').value;
    
    // Aqui você pode adicionar a lógica para salvar os dados, por exemplo, enviá-los para um servidor.
    // Vou apenas mostrar uma mensagem de confirmação.
    
    document.getElementById('message').textContent = `Produto "${productName}" adicionado com sucesso!`;
    
    // Limpa os campos após o envio
    document.getElementById('product-form').reset();
});





