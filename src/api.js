
const URL_API =
  "https://redehidrometeorologica.defesacivil.rs.gov.br/graphql";

async function testarApi() {
  try {
    const resposta = await fetch(URL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query Tags_data {
          tags_data(clients: ["casa-militar-defesa-civil-rs"]) {
            qualle_meteorologia {
              codigo
              name {
                prefix
                general
                local
              }
              timestamp
            }
            proximaAtualizacaoEm
          }
        }`,
      }),
    });

    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Não foi possível conectar à API:", erro);
  }
}
testarApi();

