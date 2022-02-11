import { useData } from '@context/data';
import api from '@utils/frontend/main';
import Divider from './Divider';

export const Activity = () => {
  const { data } = useData();
  const activity = api.adaptActivity(data?.lanyard?.data);
  if (!activity) return null;

  return (
    <>
      <Divider className='my-4' />
      <div className='flex flex-col w-full'>
        <div className='w-full bg-primary-700 mb-2 last:mb-0 h-10/5 px-2 flex justify-start items-center rounded-8'>
          <div className='aspect-1 h-8 mr-4'>
            <img src={activity?.image} alt='Activity Large Image' height='40px' width='40px' sizes='6' className='rounded-5' />
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
