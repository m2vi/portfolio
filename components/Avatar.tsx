import { LanyardDataProps } from '@utils/types';

const Avatar = ({ data }: LanyardDataProps) => {
  return (
    <div className='rounded w-128 h-128 relative mb-2 select-none bg-primary-700 overflow-hidden'>
      {data ? (
        <img
          src={`https://cdn.discordapp.com/avatars/${data?.discord_user?.id}/${data?.discord_user?.avatar}.webp?size=256`}
          height='128px'
          width='128px'
          className='no-drag'
          alt='Discord Avatar'
        />
      ) : null}
    </div>
  );
};

export default Avatar;
