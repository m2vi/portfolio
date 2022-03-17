import Activity from '@components/Activity';
import Divider from '@components/Divider';
import Links from '@components/Connections';
import Avatar from '@components/Avatar';
import Info from '@components/Info';
import { ConfigDataProps, LanyardDataProps } from '@utils/types';

interface CardProps extends LanyardDataProps, ConfigDataProps {}

const Card = ({ data, config }: CardProps) => {
  return (
    <div className='bg-primary-800 shadow-1 rounded-15 max-w-sm flex flex-col items-center px-8 py-8 text-center w-full mb-8 '>
      <Avatar data={data} />
      <Info data={data} />
      <Divider className='my-4' />
      <Links config={config} />
      <Activity data={data} />
    </div>
  );
};

export default Card;
