import Image from 'next/image';
import { IoLogoDiscord, IoLogoFigma, IoLogoGithub } from 'react-icons/io5';
import { DiscordActivity, SpotifyActivity } from './Activity';
import Divider from './Divider';
import Links from './Links';

const Card = ({ discord, me }) => {
  return (
    <div className='bg-primary-800 rounded-8 max-w-sm flex flex-col items-center px-8 py-8 text-center w-full mb-8 '>
      <div className='rounded cursor-pointer w-128 h-128 relative mb-2 select-none'>
        <div className={`absolute inset-0 w-full h-full status status-${discord.data.discord_status} z-50 rounded select-none`}></div>
        <Image
          src={`https://cdn.discordapp.com/avatars/${discord.data.discord_user.id}/${discord.data.discord_user.avatar}.png?size=512`}
          height='128px'
          width='128px'
          quality='100'
          className='rounded no-drag select-none bg-primary-700'
          alt='Discord Avatar'
        />
      </div>
      <div>
        <p className='font-medium text-3xl'>{discord.data.discord_user.username}</p>
        <p className='text-primary-300'>Fullstack Developer</p>
      </div>
      <Divider className='my-4' />
      <Links me={me} />
      {discord.data.spotify ? (
        <>
          <Divider className='my-4' />
          <SpotifyActivity discord={discord} />
        </>
      ) : (
        (discord.data.activities as any[]).filter((a) => a.type === 0).slice(0, 1).length > 0 && (
          <>
            <Divider className='my-4' />
            <DiscordActivity discord={discord} />
          </>
        )
      )}
    </div>
  );
};

export default Card;
