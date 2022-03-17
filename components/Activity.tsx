import api from '@utils/frontend/main';

import Divider from '@components/Divider';
import { LanyardDataProps } from '@utils/types';

export const Activity = ({ data }: LanyardDataProps) => {
  const activity = api.adaptActivity(data);
  if (!activity) return null;

  return (
    <>
      <Divider className='my-4' />
      <div className='flex flex-col w-full'>
        <div className='w-full bg-primary-700 mb-2 last:mb-0 h-10/5 px-2 flex justify-start items-center rounded-8'>
          <div className='h-8 w-8 mr-4 overflow-hidden rounded-5'>
            <img src={activity?.image} alt='Activity Large Image' className='h-full w-full' />
          </div>
          <div className='text-left h-8 flex justify-center flex-col items-start overflow-hidden'>
            <p
              title={activity?.name}
              className='w-full font-semibold text-primary-200 leading-5 overflow-hidden overflow-ellipsis whitespace-nowrap'
            >
              {activity?.name}
            </p>
            <p
              title={activity?.details}
              className='w-full font-medium text-primary-300 leading-5 overflow-hidden overflow-ellipsis whitespace-nowrap'
            >
              {activity?.details}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
