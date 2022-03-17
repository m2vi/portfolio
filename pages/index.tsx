import Card from '@components/Card';
import { useData } from '@context/data';
import { b } from '@utils/index';

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
        <link rel='icon' type='image/png' href={favicon} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://card.m2vi.me/' />
        <meta property='og:title' content='Portfolio - m2vi' />
        <meta property='og:description' content='My portfolio. Actually only a card.' />
        <meta property='og:image' content={favicon}></meta>
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
