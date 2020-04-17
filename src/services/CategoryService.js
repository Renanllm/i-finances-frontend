const categoriesExpense = {
  data: ['Alimentação', 'Assinatura e Serviços', 'Diversão', 'Casa', 'Compras', 'Educação', 'Saúde', 'Trabalho', 'Transporte', 'Outros'],
  type: 'Saída'
};

const categoriesIncome = {
  data: ['Salário', 'Investimentos', 'Empréstimos', 'Outras Receitas'],
  type: 'Entrada'
};

const getCategories = (type) => {
  if (type === 'Entrada') {
    return categoriesIncome;
  }
  return categoriesExpense;
}

export {
  getCategories
};