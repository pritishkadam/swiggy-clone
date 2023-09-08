import { IMG_CDN_URL } from '../../config';
import { Link } from 'react-router-dom';

const SuggestionList = (props) => {
  const { suggestions } = props;
  return (
    <div className='w-full flex flex-col my-2'>
      {suggestions &&
        suggestions.map((element, index) => (
          <Suggestion key={index} suggestionItem={element} />
        ))}
    </div>
  );
};

const Suggestion = (props) => {
  const { suggestionItem } = props;
  const { text, cloudinaryId, subCategory, subCategoryColor, metadata } =
    suggestionItem;
  return (
    <Link to={`/search?query=${text}`}>
      <div className='w-full flex my-2 py-2 hover:bg-blue-50 cursor-pointer'>
        <img
          src={IMG_CDN_URL + cloudinaryId}
          alt='food'
          className='w-20 h-16 rounded-md'
        />
        <div
          className={'flex flex-col justify-center mx-2 ' + subCategoryColor}
        >
          <h3 className='text-base font-medium'>{text}</h3>
          <span className='text-xs'>{subCategory}</span>
        </div>
      </div>
    </Link>
  );
};

export default SuggestionList;
