import { getElement, sortConfig } from '../components/Offers/sortConfig';

const getRestaurantList = (data) => {
  if (data) {
    const restaurant_listing = data.filter((element) => {
      //   if (element.card.card.id === "restaurant_grid_listing") {
      if (element.card.card['@type'].includes('GridWidget')) {
        return element.card.card.gridElements.infoWithStyle.restaurants;
      }
    });
    const { restaurants } =
      restaurant_listing[0].card.card.gridElements.infoWithStyle;

    return restaurants;
  }
  return [];
};

const getRestaurantInfo = (data, searchStr) => {
  if (data) {
    const info = data.filter((element) => {
      if (!element.groupedCard) {
        if (element.card.card['@type'].includes(searchStr)) {
          return element;
        }
      }
    });
    const cardData = info[0]?.card?.card;
    return cardData ? cardData : {};
  }
};

const getMenuDetails = (data) => {
  if (data) {
    console.log('data: getMenuDetails: ', data);
    const groupedCard = data.filter((element) => {
      if (element.groupedCard) {
        return element;
      }
    });
    const cardData = groupedCard[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const menuData = getMenuItems(cardData);
    return menuData ? menuData : [];
  }
};

const getMenuItems = (data) => {
  const dataArray = [];
  if (data) {
    const menuData = data.map((element) => {
      if (element?.card?.card?.['@type'].includes('NestedItemCategory')) {
        const { title, categories } = element?.card?.card;
        dataArray.push(...categories);
      } else if (element?.card?.card?.['@type'].includes('ItemCategory')) {
        const { title, itemCards } = element?.card?.card;
        dataArray.push({ title, itemCards });
      }
    });
  }
  return dataArray;
};

const getCuisines = (data) => {
  const dataArray = [];
  if (data) {
    const resultantData = data.filter((element) => {
      if (element?.card?.card?.id === 'whats_on_your_mind') {
        return element;
      }
    });
    const info =
      resultantData[0]?.card?.card?.gridElements?.infoWithStyle?.info;
    return info ? info : [];
  }
  return dataArray;
};

const getQueryData = (data) => {
  const dataArray = [];
  if (data) {
    const { cards } = data;
    if (cards) {
      const cardGroupMap = [];
      const groupedCard = cards.map((card) => {
        if (card.groupedCard !== undefined) {
          cardGroupMap.push(card.groupedCard.cardGroupMap);
        }
      });
      if (
        cardGroupMap &&
        cardGroupMap.length !== 0 &&
        'DISH' in cardGroupMap[0]
      ) {
        const resultantDataArray = getDishesInfo(cardGroupMap[0].DISH.cards);
        return resultantDataArray;
      }
    }
  }
  return dataArray;
};

const getDishesInfo = (data) => {
  const dataArray = [];
  if (data) {
    const info = data.map((element) => {
      if (!element.groupedCard) {
        if (element.card.card['@type'].includes('Dish')) {
          const data = element.card.card;
          dataArray.push(data);
        }
      }
    });
  }
  return dataArray;
};

const compare = (filter) => {
  console.log('Filter: Reached in common compare: ', filter);

  return (a, b) => {
    if (a.info[filter] > b.info[filter]) {
      return -1;
    }
    if (a.info[filter] < b.info[filter]) {
      return 1;
    }
    return 0;
  };
};

const compareCost = (filterKey, filterType) => {
  let sortOrder = 1;
  if (filterType === 'desc') {
    sortOrder = -1;
  }
  return (a, b) => {
    if (a.info[filterKey] < b.info[filterKey]) {
      return -1 * sortOrder;
    }
    if (a.info[filterKey] > b.info[filterKey]) {
      return 1 * sortOrder;
    }
    return 0;
  };
};

const compareByDeliveryTime = (a, b) => {
  if (a.info?.sla?.deliveryTime < b.info?.sla?.deliveryTime) {
    return -1;
  }
  if (a.info?.sla?.deliveryTime > b.info?.sla?.deliveryTime) {
    return 1;
  }
  return 0;
};

const getSortedData = (data, filter) => {
  if (data) {
    const resultantOption = getElement(filter);
    const { filterKey, filterType } = resultantOption[0];
    if (filter === '') {
      return data;
    } else if (filter.includes('deliveryTimeAsc')) {
      return data.sort(compareByDeliveryTime);
    } else if (filter.includes('costForTwo')) {
      return data.sort(compareCost(filterKey, filterType));
    }
    return data.sort(compare(filterKey));
  }
  return [];
};

export {
  getRestaurantList,
  getRestaurantInfo,
  getMenuDetails,
  getCuisines,
  getSortedData,
  getQueryData,
};
