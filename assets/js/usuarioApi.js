async function buscarUsuarioPorEmail(email) {
    console.log('Buscando usuário com email:')

}

async function atualizarUsuario(email, nome, senha) {
    const response = await fetch(`${BASE_URL}/usuario/${encodeURIComponent(email)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, senha })
    });
    return response.json()
}

//funcao deletar usuario por id

async function deletarUsuario(id) {
    const response = await fetch(`${BASE_URL}/usuario/${id}`, { method: 'DELETE' });
    return response.status === 204;
}

export {
    criarUsuario,
    listarUsuarios,
    buscarUsuarioPorEmail,
    atualizarUsuario,
    deletarUsuario
};