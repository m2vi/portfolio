import { useData } from '@context/data';
import { Activity } from './Activity';
import Divider from './Divider';
import Links from './Links';
import { LanyardResponse } from 'react-use-lanyard';

const Card = ({ initalDiscord }: { initalDiscord: LanyardResponse }) => {
  const {
    data: { lanyard },
  } = useData();

  const { data: discord } = lanyard ? lanyard : initalDiscord;

  return (
    <div className='bg-primary-800 rounded-15 max-w-sm flex flex-col items-center px-8 py-8 text-center w-full mb-8 '>
      <div className='rounded w-128 h-128 relative mb-2 select-none bg-primary-700 overflow-hidden'>
        {discord ? (
          <img
            src={`https://cdn.discordapp.com/avatars/${discord?.discord_user?.id}/${discord?.discord_user?.avatar}.webp?size=256`}
            height='128px'
            width='128px'
            className='no-drag'
            alt='Discord Avatar'
          />
        ) : null}
      </div>
      <div>
        <p className='font-medium text-3xl'>{discord?.discord_user?.username}</p>
        <p className='text-primary-300'>Fullstack Developer</p>
      </div>
      <Divider className='my-4' />
      <Links />
      <Activity />
    </div>
  );
};

export default Card;
