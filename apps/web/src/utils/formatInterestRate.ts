export const formatInterestRate = (rate: number) =>
  new Intl.NumberFormat('ko-KR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  }).format(rate)
