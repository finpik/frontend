export const formatKoreanCurrency = (amount: number): string => {
  const 억 = Math.floor(amount / 1e8)
  const 만 = Math.floor((amount % 1e8) / 1e4)
  const 원 = amount % 1e4

  if (억 > 0 && 만 > 0) {
    return `${억.toLocaleString('ko')}억 ${만.toLocaleString('ko')}만`
  } else if (억 > 0) {
    return `${억.toLocaleString('ko')}억`
  } else if (만 > 0) {
    return `${만.toLocaleString('ko')}만`
  } else {
    return `${원.toLocaleString('ko')}`
  }
}
