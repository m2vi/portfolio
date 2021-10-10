import { FaDiscord, FaSpotify, FaGithubAlt, FaSteam } from 'react-icons/fa';

const Links = ({ me }) => {
  return (
    <div className='grid grid-cols-4 place-items-center w-full px-4 text-accent'>
      <a href={`https://discord.com/users/${me.discord}`} title='Discord'>
        <FaDiscord className='w-5 h-5 cursor-pointer' />
      </a>
      <a href={`https://github.com/${me.github}`} title='GitHub'>
        <FaGithubAlt className='w-5 h-5 cursor-pointer' />
      </a>
      <a href={`https://steamcommunity.com/profiles/${me.steam}`} title='Steam'>
        <FaSteam className='w-5 h-5 cursor-pointer' />
      </a>
      <a href={`https://open.spotify.com/user/${me.spotify}`} title='Spotify'>
        <FaSpotify className='w-5 h-5 cursor-pointer' />
      </a>
    </div>
  );
};

export default Links;
