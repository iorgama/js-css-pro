var produtos = [
  {
    id: 1,
    name: 'Jaleco',
    description:
      'Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes',
    price: 'R$ 999,99',
    available: true,
  },
  {
    id: 2,
    name: 'Avental',
    description:
      'Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes',
    price: 'R$ 999,99',
    available: true,
  },
  {
    id: 3,
    name: 'Touca',
    description:
      'Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes',
    price: 'R$ 999,99',
    available: true,
  },
  {
    id: 4,
    name: 'Fronha',
    description:
      'Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes',
    price: 'R$ 999,99',
    available: true,
  },
  {
    id: 5,
    name: 'Embalagem',
    description:
      'Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes',
    price: 'R$ 999,99',
    available: false,
  },
  {
    id: 6,
    name: 'Porta talher',
    description:
      'Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes',
    price: 'R$ 999,99',
    available: true,
  },
  {
    id: 7,
    name: 'Porta absorvente',
    description:
      'Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes',
    price: 'R$ 999,99',
    available: true,
  },
];

function criarTD(text) {
  const td = document.createElement('td');
  const element = document.createTextNode(text);
  td.appendChild(element);
  return td;
}

function inserirDadosTabela(produto) {
  const table = document.getElementById('dados_tabela');
  const tr = document.createElement('tr');
  table.appendChild(tr);

  //name
  tr.appendChild(criarTD(produto.name));
  //description
  tr.appendChild(criarTD(produto.description));
  //price
  tr.appendChild(criarTD(produto.price));
  //available
  let isAvailable = produto.available ? 'Disponível' : 'Indisponível';
  tr.appendChild(criarTD(isAvailable));
}

produtos.forEach(inserirDadosTabela);
