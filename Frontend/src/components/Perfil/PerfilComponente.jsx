import React, { useState } from "react";
import "./PerfilComponente.css";

function PerfilComponente() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    cell: "",
    cep: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    country: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar os dados para o backend
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        created_at: new Date().toISOString(),
        update_at: new Date().toISOString(),
        status: "Ativo"
      })
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Login criado com sucesso:", result);
      // Aqui você pode adicionar lógica para redirecionar ou mostrar uma mensagem de sucesso
    } else {
      const error = await response.json();
      console.error("Erro ao criar login:", error);
      // Aqui você pode adicionar lógica para mostrar uma mensagem de erro
    }
  };

  return (
    <div className="container1">
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="setor">
          <h3>DADOS PESSOAIS</h3>
          <input
            type="text"
            name="name"
            placeholder="Nome Completo"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Endereço de E-mail"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar Senha"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="setor">
          <h3>CONTATO</h3>
          <input
            type="text"
            name="phone"
            placeholder="Telefone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cell"
            placeholder="Celular"
            value={formData.cell}
            onChange={handleChange}
          />
        </div>
        
        <div className="setor">
          <h3>ENDEREÇO</h3>
          <input
            type="number"
            name="cep"
            placeholder="CEP"
            value={formData.cep}
            onChange={handleChange}
          />
          <input
            type="text"
            name="street"
            placeholder="Logradouro"
            value={formData.street}
            onChange={handleChange}
          />
          <div className="inline-inputs">
            <input
              type="number"
              name="number"
              placeholder="Número"
              value={formData.number}
              onChange={handleChange}
            />
            <input
              type="text"
              name="complement"
              placeholder="Complemento"
              value={formData.complement}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="neighborhood"
              placeholder="Bairro"
              value={formData.neighborhood}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="Cidade"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="inline-inputs">
            <input
              type="text"
              name="state"
              placeholder="Estado"
              value={formData.state}
              onChange={handleChange}
            />
            <input
              type="text"
              name="country"
              placeholder="País"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default PerfilComponente;
