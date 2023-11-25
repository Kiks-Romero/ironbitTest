const calcTriangle = (n) => {
  return (n * (n + 1)) / 2;
};

const fibonacci = (n) => {
  let a = 0,
    b = 1,
    c = n;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
};

const esPrimo = (num) => {
  let c = 300,
    j = 2,
    numerosPrimos = [];
  for (; j < c; j++) {
    if (primo(j)) {
      numerosPrimos.push(j);
    }
  }
  return numerosPrimos[num - 1];
};

const primo = (numero) => {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return numero !== 1;
};

const serie = (num) => {
  if (num <= 2) return 0;
  let opc =
    (2 * calcTriangle(num + 2) * 3 * esPrimo(num - 2)) / (7 * fibonacci(num));
  return Math.round(opc);
};
export default serie;
