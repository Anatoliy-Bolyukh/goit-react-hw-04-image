import { Dna } from 'react-loader-spinner';
import s from './loader.module.css';
const Loader = () => {
  return (
    <Dna
      visible={true}
      height="250"
      width="250"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass={s.spinerStyle}
      />
  );
};

export default Loader;
