import { IMainProps } from './Main.types';

const Main = (props: IMainProps): JSX.Element => {
  return (
    <div {...props}>
      <div>This is the Main.tsx file. From here you should start to build your components!</div>
      <div>Happy coding!</div>
    </div>
  );
};

export default Main;
