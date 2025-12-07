import { ReactNode } from 'react';

export interface Product {
  id: string;
  title: string;
  desc: string;
  icon: ReactNode;
  rate: number;
  minVal: number;
  maxVal: number;
  maxTerm: number;
}

export const PRODUCTS: Record<string, Product> = {
  inss: {
    id: 'inss',
    title: "Consignado INSS",
    desc: "As menores taxas do mercado com desconto direto na folha de pagamento.",
    icon: null,
    rate: 0.016,
    minVal: 500,
    maxVal: 50000,
    maxTerm: 84
  },
  servidor: {
    id: 'servidor',
    title: "Servidores Públicos",
    desc: "Linhas de crédito exclusivas para servidores Federais, Estaduais e Municipais.",
    icon: null,
    rate: 0.0145,
    minVal: 1000,
    maxVal: 100000,
    maxTerm: 96
  },
  cartao: {
    id: 'cartao',
    title: "Cartão de Crédito",
    desc: "Sem anuidade e com margem exclusiva para aposentados e servidores.",
    icon: null,
    rate: 0.025,
    minVal: 500,
    maxVal: 15000,
    maxTerm: 72
  },
  clt: {
    id: 'clt',
    title: "Empréstimo CLT",
    desc: "Desconto em folha para funcionários de empresas privadas conveniadas.",
    icon: null,
    rate: 0.029,
    minVal: 300,
    maxVal: 10000,
    maxTerm: 48
  },
  auxilio: {
    id: 'auxilio',
    title: "Auxílio Brasil",
    desc: "Antecipe suas parcelas do benefício com rapidez e segurança.",
    icon: null,
    rate: 0.035,
    minVal: 200,
    maxVal: 2500,
    maxTerm: 24
  }
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export interface Simulation {
  pmt: number;
  totalPaid: number;
  totalInterest: number;
  rateDisplay: string;
}

export const calculateLoan = (amount: number, months: number, rate: number): Simulation => {
  const i = rate;
  const n = months;
  const pv = amount;
  
  const pmt = pv * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  const totalPaid = pmt * n;
  const totalInterest = totalPaid - pv;

  return {
    pmt,
    totalPaid,
    totalInterest,
    rateDisplay: (i * 100).toFixed(2)
  };
};
