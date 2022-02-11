import { useData } from '@context/data';
import { FaDiscord, FaGithubAlt, FaSteam, FaSpotify } from 'react-icons/fa';

const Links = () => {
  const { data } = useData();

  const icons = {
    FaDiscord,
    FaGithubAlt,
    FaSteam,
    FaSpotify,
  };

  return (
    <div className='grid grid-cols-4 place-items-center w-full px-4 text-accent'>
      {Object.entries(data.config).map(([service, { id, url, icon }], i) => {
        const Icon = icons?.[icon];

        return (
          <a href={`${url}${id}`} title={service} key={i}>
            <Icon className='w-5 h-5 cursor-pointer hover:text-accent-hover' />
          </a>
        );
      })}
    </div>
  );
};

export default Links;
