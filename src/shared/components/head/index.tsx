import Head from 'next/head';
import { IProps } from './head.types';

const MyHead: React.FC<IProps> = ({ title }) => (
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
    <title>Quiz StarWars {title ? ` - ${title}` : ''}</title>
  </Head>
);

MyHead.defaultProps = { title: '' };

export default MyHead;
