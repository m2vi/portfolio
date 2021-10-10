import Image from 'next/image';

export const DiscordActivity = ({ discord }) => {
  const main = (discord.data.activities as any[]).filter((a) => a.type === 0).slice(0, 1);
  if (!main) return null;

  return (
    <div className='flex flex-col w-full'>
      {main.map((activity, i) => {
        const large_image = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`;

        return (
          <div className='w-full bg-primary-700 mb-2 last:mb-0 h-10/5 px-2 flex justify-start items-center rounded-8' key={i}>
            <div className='aspect-1 h-8 mr-4'>
              <Image src={large_image} alt='Activity Large Image' height='40px' width='40px' sizes='6' className='rounded-5' />
            </div>
            <div className='h-8 flex justify-start flex-col items-start'>
              <p
                className='font-semibold text-primary-200 l-1 overflow-hidden overflow-ellipsis whitespace-nowrap'
                style={{ marginTop: '5px' }}
              >
                {activity.name}
              </p>
              <p className='text-primary-300 l-1 overflow-hidden overflow-ellipsis whitespace-nowrap' style={{ marginTop: '2px' }}>
                {activity.details}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const SpotifyActivity = ({ discord }) => {
  const spotify = discord.data.spotify;
  if (!spotify) return null;

  return (
    <div className='flex flex-col w-full'>
      <div className='w-full bg-primary-700 mb-2 last:mb-0 h-10/5 px-2 flex justify-start items-center rounded-8'>
        <div className='aspect-1 h-8 mr-4'>
          <Image src={spotify.album_art_url} alt='Album Art' height='40px' width='40px' sizes='6' className='rounded-5' />
        </div>
        <div className='h-8 flex justify-start flex-col items-start'>
          <p
            className='font-semibold text-primary-200 l-1 overflow-hidden overflow-ellipsis whitespace-nowrap'
            style={{ marginTop: '5px' }}
          >
            {spotify.song}
          </p>
          <p className='text-primary-300 l-1 overflow-hidden overflow-ellipsis whitespace-nowrap' style={{ marginTop: '2px' }}>
            {spotify.artist}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpotifyActivity;
