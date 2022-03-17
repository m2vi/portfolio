import { LanyardDataProps } from '@utils/types';

const Info = ({ data }: LanyardDataProps) => {
  return (
    <div>
      <p className='font-medium text-3xl'>{data?.discord_user?.username}</p>
      <p className='text-primary-300'>Fullstack Developer</p>
    </div>
  );
};

export default Info;
