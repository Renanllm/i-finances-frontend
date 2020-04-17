const parseNumberToCurrency = (number) => {
  return Intl.NumberFormat("pt-Br", { style: 'currency', currency: 'BRL'}).format(number);
}

export default parseNumberToCurrency;