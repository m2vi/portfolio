const Text = () => {
  return (
    <div className='absolute left-2 bottom-2 fxs:grid grid-flow-col gap-1 hidden'>
      <p className='flex text-primary-300 text-sm font-normal'>
        Source code:&nbsp;
        <a className='underline hover:opacity-80' href='https://github.com/m2vi/portfolio' target='_blank' rel='noreferrer'>
          Github
        </a>
        ;
      </p>
      <p className='flex items-center text-primary-300 text-sm font-normal'>Made with Next.js</p>
    </div>
  );
};

export default Text;
