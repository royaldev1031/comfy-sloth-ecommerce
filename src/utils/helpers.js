export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currencty',
    currency: 'USD',
  }).format(number / 100)
}

export const getUniqueValues = () => {}
