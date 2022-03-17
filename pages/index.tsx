import Card from '@components/Card';
import { useData } from '@context/data';
import { b } from '@utils/fetch';

import api from '@utils/backend/main';

import { avatarUrl } from '@utils/discord';
import { basicFetch } from '@utils/fetch';

import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useLanyard } from 'react-use-lanyard';
import Text from '@components/Info';

const Home: NextPage = ({ favicon, discord_id, config, discord }: any) => {
  const { data, update } = useData();
  const { data: lanyard } = useLanyard({
    userId: discord_id,
    socket: false,
  });

  useEffect(() => {
    update({ lanyard: discord, config });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    update({ lanyard, config });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lanyard]);

  return (
    <div>
      <Head>
        <title>{data?.lanyard?.data?.discord_user?.username}</title>
        <link rel='icon' type='image/webp' href={favicon} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='https://card.m2vi.me/' />
        <meta name='twitter:title' content='m2vi' />
        <meta name='twitter:description' content={`My portfolio website I made with Next.js and Tailwind`} />
        <meta name='twitter:image' content={favicon}></meta>
      </Head>
      <main className='h-screen w-screen grid place-items-center'>
        <Card data={discord} />
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
      favicon: avatarUrl(req, discord),
      discord_id: discord?.data?.discord_user?.id,
      config: api.config,
      discord,
    },
  };
};
