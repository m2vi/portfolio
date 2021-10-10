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
      try {
        const data = await basicFetch('/api/discord');
        if (!data.success) return;

        setDiscord(data);
      } catch (error) {
        console.log(error.message);
      }
    }, 1024);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Head>
        <link rel='icon' type='image/png' href={favicon} />
      </Head>
      <NextSeo title={discord.data.discord_user.username} description="Hi, I'm m2vi and this is my portfolio page I made with Next.js" />
      <div className='h-screen w-screen grid place-items-center'>
        <Card discord={discord} me={me} />
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const discord = await basicFetch(`${b(req)}/api/discord`);
  const me = JSON.parse(process.env.config);

  return {
    props: {
      favicon: avatarUrl(req, discord),
      discord,
      me,
    },
  };
};
