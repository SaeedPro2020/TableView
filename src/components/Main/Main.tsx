import { IMainProps } from './Main.types';
import WorldBanks from './WorldBanks';

const Main = (props: IMainProps): JSX.Element => {
  return (
    <div {...props}>
      <WorldBanks />
    </div>
  );
};

export default Main;
