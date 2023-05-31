window.addEventListener('DOMContentLoaded', async () => {

    const requisicaoParaApiDoRoblox = await fetch('http://localhost:8080/https://users.roblox.com/v1/users/553552431');
    const usuario = await requisicaoParaApiDoRoblox.json();

    document.getElementById('nome-do-jogador').innerText = usuario.name
    console.log(usuario.name)
})