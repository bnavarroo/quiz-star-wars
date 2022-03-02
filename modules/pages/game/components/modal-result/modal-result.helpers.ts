import { NextRouter } from 'next/router';

const finishGame = (router: NextRouter) => (): void => {
  router.replace(`/home`);
};

export default finishGame;
