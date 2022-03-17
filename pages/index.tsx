import Card from '@components/Card';
import { b } from '@utils/fetch';

import api from '@utils/backend/main';

import { avatarUrl } from '@utils/discord';
import { basicFetch } from '@utils/fetch';

import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useLanyard } from 'react-use-lanyard';
import Text from '@components/BottomText';

const Home: NextPage = ({ avatarUrl, discord_id, config, discord }: any) => {
  const { data: lanyard } = useLanyard({
    userId: discord_id,
    socket: false,
  });

  const data = lanyard ? lanyard : discord;

  return (
    <div>
      <Head>
        <title>{data?.data?.discord_user?.username}</title>
        <link rel='icon' type='image/webp' href={avatarUrl} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='https://card.m2vi.me/' />
        <meta name='twitter:title' content='m2vi' />
        <meta name='twitter:description' content={`My portfolio website I made with Next.js and Tailwind`} />
        <meta name='twitter:image' content={avatarUrl}></meta>
      </Head>
      <main className='h-screen w-screen flex justify-center items-center'>
        <Card data={data?.data} config={config} />
      </main>
      <Text />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const discord = await basicFetch(`${b(req)}/api/discord`);

  return {
    props: {
      avatarUrl: avatarUrl(discord, 512),
      discord_id: discord?.data?.discord_user?.id,
      config: api.config,
      discord,
    },
  };
};
