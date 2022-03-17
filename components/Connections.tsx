import { useData } from '@context/data';
import { FaDiscord, FaGithubAlt, FaSteam, FaSpotify } from 'react-icons/fa';

const Links = () => {
  const { data } = useData();

  return (
    <div className='grid grid-cols-4 place-items-center w-full px-4 text-accent'>
      <a href={`${data?.config?.discord?.url}${data?.config?.discord?.id}`} title='discord'>
        <FaDiscord className='w-5 h-5 cursor-pointer hover:text-accent-hover' />
      </a>
      <a href={`${data?.config?.github?.url}${data?.config?.github?.id}`} title='github'>
        <FaGithubAlt className='w-5 h-5 cursor-pointer hover:text-accent-hover' />
      </a>
      <a href={`${data?.config?.steam?.url}${data?.config?.steam?.id}`} title='steam'>
        <FaSteam className='w-5 h-5 cursor-pointer hover:text-accent-hover' />
      </a>
      <a href={`${data?.config?.spotify?.url}${data?.config?.spotify?.id}`} title='spotify'>
        <FaSpotify className='w-5 h-5 cursor-pointer hover:text-accent-hover' />
      </a>
    </div>
  );
};

export default Links;
