import Card from '@components/Card';
import { avatarUrl } from '@utils/discord';
import { b, basicFetch } from '@utils/index';
import type { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Home: NextPage = ({ favicon, discord: initalDiscord, me }: any) => {
  const [discord, setDiscord] = useState(initalDiscord);

  useEffect(() => {
    const interval = setInterval(async () => {
      await basicFetch('/api/discord').then((data) => {
        if (!data.success) return;

        setDiscord(data);
      });
    }, 1024);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Head>
        <link rel='icon' type='image/png' href={favicon} />
      </Head>
      <NextSeo title={discord.data.discord_user.username} />
      <div className='h-screen w-screen grid place-items-center'>
        <Card discord={discord} me={me} />
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const discord = await basicFetch(`${b(req)}/api/discord`);
  const me = await basicFetch(`${b(req)}/api/me`);

  return {
    props: {
      favicon: avatarUrl(req, discord),
      discord,
      me,
    },
  };
};
