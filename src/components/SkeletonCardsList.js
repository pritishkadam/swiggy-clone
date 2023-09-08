import SkeletonCard from './SkeletonCard';

const SkeletonCardsList = () => {
  return (
    <div className='w-8/12 flex flex-wrap mx-auto justify-evenly gap-y-8 my-10'>
      {Array(10)
        .fill('')
        .map((el, index) => (
          <SkeletonCard key={index} />
        ))}
    </div>
  );
};

export default SkeletonCardsList;