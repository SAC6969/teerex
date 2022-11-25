const filters = [
  {
    type: 'color',
    value: 'Black',
  },
  {
    type: 'color',
    value: 'Blue',
  },
  {
    type: 'color',
    value: 'Green',
  },
  {
    type: 'gender',
    value: 'Men',
  },
  {
    type: 'gender',
    value: 'Women',
  },
  {
    type: 'price',
    value: 250,
  },
  {
    type: 'price',
    value: 450,
  },
  {
    type: 'price',
    value: 451,
  },
  {
    type: 'type',
    value: 'Polo',
  },
  {
    type: 'type',
    value: 'Hoodie',
  },
  {
    type: 'type',
    value: 'Basic',
  },
];

export const filter = (check, index) => {
  let getData = filters[index];
  return getData;
};

export const filterByText = (products, searchText) => {
  let text = searchText.split(' ');
  if (text.length === 2) {
    let newArrText = products.filter(
      (i) => i.name.toLowerCase() == searchText.toLowerCase()
    );
    return newArrText
  }else if(text.length === 1){  
    if(searchText.toLowerCase() === 'polo' || searchText.toLowerCase() === 'hoodie' || searchText.toLowerCase === 'Basic'){
      let newArrText = products.filter(
        (i) => i.type.toLowerCase() == searchText.toLowerCase()
      );
      return newArrText;
    }else{
      let newArrText = products.filter(
        (i) => i.color.toLowerCase() == searchText.toLowerCase()
      );
      return newArrText;
    }
  }
};

export const filtersProduct = (products, filterArr) => {
  let price = [];
  let gender = [];
  let type = [];
  let color = [];

  filterArr.forEach((element) => {
    if (element.type === 'gender') {
      gender.push(element.value);
    } else if (element.type === 'price') {
      price.push(element.value);
    } else if (element.type === 'type') {
      type.push(element.value);
    } else if (element.type === 'color') {
      color.push(element.value);
    }
  });

  let filteredArr = [];
  
  if (gender.length > 0) {
    let sendArr = filteredArr.length !== 0 ? filteredArr : products;
    let arr = filterbygender(sendArr, gender);
    filteredArr = [...arr];
  }

  if (price.length > 0) {
    let sendArr = filteredArr.length !== 0 ? filteredArr : products;
    let arr = filterProducrsByprice(sendArr, price);
    filteredArr = [...arr];
  }


  if (color.length > 0) {
    let sendArr = filteredArr.length !== 0 ? filteredArr : products;
    let arr = filterBycolor(sendArr, color);
    filteredArr = [...arr];
  }

  if (type.length > 0) {
    let sendArr = filteredArr.length !== 0 ? filteredArr : products;
    let arr = filterByType(sendArr, type);
    filteredArr = [...arr];
  }

  return filteredArr;
};

const filterProducrsByprice = (products, price) => {
  let filteredArrByprice = [];
  // 3 times price loop => products =>
  if (price.length == 3) {
    filteredArrByprice = products;
    return filteredArrByprice;
  }

  price.forEach((key) => {
    if (key == 250) {
      let newArr = products.filter((val) => val.price <= key);
      filteredArrByprice = [...filteredArrByprice, ...newArr];
    }
    if (key == 450) {
      let newArr = products.filter(
        (val) => val.price <= key && val.price > 250
      );
      filteredArrByprice = [...filteredArrByprice, ...newArr];
    }
    if (key == 451) {
      let newArr = products.filter((val) => val.price >= key);
      filteredArrByprice = [...filteredArrByprice, ...newArr];
    }
  });

  return filteredArrByprice;
};

const filterbygender = (products, gender) => {
  let filteredArrByGender = [];

  if (gender.length == 2) {
    filteredArrByGender = products;
    return filteredArrByGender;
  }

  gender.forEach((key) => {
    if (key === 'Men') {
      let newArr = products.filter((val) => val.gender == 'Men');
      filteredArrByGender = [...filteredArrByGender, ...newArr];
    }
    if (key == 'Women') {
      let newArr = products.filter((val) => val.gender == 'Women');
      filteredArrByGender = [...filteredArrByGender, ...newArr];
    }
  });

  return filteredArrByGender;
};

const filterBycolor = (products, color) => {
  let filteredArrByColor = [];
  if (color.length == 3) {
    filteredArrByColor = products;
    return filteredArrByColor;
  }

  color.forEach((key) => {
    if (key == 'Blue') {
      let newArr = products.filter((val) => val.color === 'Blue');
      filteredArrByColor = [...filteredArrByColor, ...newArr];
    }
    if (key == 'Black') {
      let newArr = products.filter((val) => val.color === 'Black');
      filteredArrByColor = [...filteredArrByColor, ...newArr];
    }
    if (key == 'Green') {
      let newArr = products.filter((val) => val.color === 'Green');
      filteredArrByColor = [...filteredArrByColor, ...newArr];
    }
  });

  return filteredArrByColor;
};

const filterByType = (products, type) => {
  let filteredArrByType = [];
  if (type.length == 3) {
    filteredArrByType = products;
    return filteredArrByType;
  }

  type.forEach((key) => {
    if (key == 'Polo') {
      let newArr = products.filter((val) => val.type === 'Polo');
      filteredArrByType = [...filteredArrByType, ...newArr];
    }
    if (key == 'Hoodie') {
      let newArr = products.filter((val) => val.type === 'Hoodie');
      filteredArrByType = [...filteredArrByType, ...newArr];
    }
    if (key == 'Basic') {
      let newArr = products.filter((val) => val.type === 'Basic');
      filteredArrByType = [...filteredArrByType, ...newArr];
    }
  });

  return filteredArrByType;
};
