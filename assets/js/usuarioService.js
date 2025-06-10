import {
    buscarUsuarioPorEmail, criarUsuario
} from './usuarioApi.js';

async function handleLoginSubmit(e) {
    e.preventDefault();
    const email = document.querySelector('#loginForm input[type="text"]').value;
    const senha = document.querySelector('#loginForm input[type="password"]').value;

    const usuario = await buscarUsuarioPorEmail(email);
    console.log(usuario);
    if (usuario && usuario.senha === senha) {
        document.dispatchEvent(
            new KeyboardEvent(
                'keydown', {
                key: 'Escape',
                code: 'Escape',
                keyCode: 27,
                which: 27
            }
            )
        );
        alert(`Bem-Vindo, ${usuario.nome || 'usuário'}!`);
    } else {
        alert('Usuário ou senha inválidos!');
    }
}

async function handleRegisterSubmit(e) {
    e.preventDefault();
    const nome = document.getElementById('regUsuario').value;
    const email = document.getElementById('regEmail').value;
    const senha = document.getElementById('regSenha').value;

    try {
        await criarUsuario(nome, email, senha);
        document.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27,
            which: 27
        }));
        alert('Cadastro realizado com sucesso!')
    } catch (error) {
        alert('Erro ao cadastrar usuário!');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginSubmit);
    }
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegisterSubmit);
    }
});