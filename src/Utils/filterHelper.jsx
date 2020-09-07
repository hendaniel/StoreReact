const priceFilter = (cost) => {
  return (product) => {
    switch (cost) {
      case 1:
        return product.cost <= 200;
      case 2:
        return product.cost > 200 && product.cost <= 500;
      case 3:
        return product.cost > 500 && product.cost <= 1000;
      case 4:
        return product.cost > 1001 && product.cost <= 2000;
      case 5:
        return product.cost > 2000;
      default:
        return product;
    }
  };
};
