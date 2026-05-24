let prestadores = [
  {
    id: 1,
    nome: "Prestador 1",
    categoria: "Mecânica Geral",
    descricao:
      "Descreva aqui um breve histórico do prestador(a) de serviços. Importante incluir uma estimativa do valor médio por hora, juntamente com a média de horas para execução dos principais serviços.",
    imagemUrl:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function getPrestadorById(id) {
  return prestadores.find((prestador) => prestador.id === Number(id));
}
