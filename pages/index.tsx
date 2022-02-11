import Card from '@components/Card';
import { useData } from '@context/data';
import api from '@utils/backend/main';
import { avatarUrl } from '@utils/discord';
import { b, basicFetch } from '@utils/index';
import type { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useEffect } from 'react';
import { useLanyard } from 'react-use-lanyard';

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
        <link rel='icon' type='image/png' href={favicon} />
      </Head>
      <NextSeo
        title={data?.lanyard?.data?.discord_user?.username}
        description="Hi, I'm m2vi and this is my portfolio page I made with Next.js, Typescript and Tailwind"
        noindex={false}
        nofollow={false}
      />
      <main className='h-screen w-screen grid place-items-center'>
        <Card initalDiscord={discord} />
      </main>
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
