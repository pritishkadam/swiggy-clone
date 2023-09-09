const sortConfig = () => {
  return [
    {
      id: 1,
      key: 'relevance',
      title: 'Relevance',
      selected: true,
      defaultSelection: true,
      filterKey: '',
    },
    {
      id: 2,
      key: 'deliveryTimeAsc',
      title: 'Delivery Time',
      filterKey: 'sla.deliveryTime',
    },
    {
      id: 3,
      key: 'modelBasedRatingDesc',
      title: 'Rating',
      filterKey: 'avgRating',
    },
    {
      id: 4,
      key: 'costForTwoAsc',
      title: 'Cost: Low to High',
      filterKey: 'costForTwo',
      filterType: 'asc'
    },
    {
      id: 5,
      key: 'costForTwoDesc',
      title: 'Cost: High to Low',
      filterKey: 'costForTwo',
      filterType: 'desc'
    },
  ];
};

const getDefaultSortOption = () => {
  const sortOptions = sortConfig();
  const option = sortOptions.filter((element) => {
    if (element?.selected) {
      return element;
    }
  });

  return option ? option[0].key : 'relevance';
};

const getElement = (key) => {
  const options = sortConfig();
  return options.filter((element) => {
    if (element.key === key) {
      return element;
    }
  });
};

export { sortConfig, getDefaultSortOption, getElement };
