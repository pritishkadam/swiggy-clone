import CardSkeleton from './CardSkeleton';

const DishCardSkeletonList = () => {
  return (
    <div className='flex flex-wrap justify-between'>
      {Array(10)
        .fill('')
        .map((el, index) => (
          <CardSkeleton key={index} />
        ))}
    </div>
  );
};

export default DishCardSkeletonList;
