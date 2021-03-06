import { HTMLAttributes } from 'react';

const Divider = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={`w-full bg-primary-700 ${className}`} style={{ height: '2px' }} {...props}></div>;
};

export default Divider;
