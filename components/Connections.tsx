import { ConfigDataProps } from '@utils/types';
import { FaDiscord, FaGithubAlt, FaSteam, FaSpotify } from 'react-icons/fa';

const Links = ({ config }: ConfigDataProps) => {
  return (
    <div className='grid grid-cols-4 place-items-center w-full px-4 text-accent'>
      <a href={`${config?.discord?.url}${config?.discord?.id}`} title='discord'>
        <FaDiscord className='w-5 h-5 cursor-pointer hover:text-accent-hover' />
      </a>
      <a href={`${config?.github?.url}${config?.github?.id}`} title='github'>
        <FaGithubAlt className='w-5 h-5 cursor-pointer hover:text-accent-hover' />
      </a>
      <a href={`${config?.steam?.url}${config?.steam?.id}`} title='steam'>
        <FaSteam className='w-5 h-5 cursor-pointer hover:text-accent-hover' />
      </a>
      <a href={`${config?.spotify?.url}${config?.spotify?.id}`} title='spotify'>
        <FaSpotify className='w-5 h-5 cursor-pointer hover:text-accent-hover' />
      </a>
    </div>
  );
};

export default Links;
