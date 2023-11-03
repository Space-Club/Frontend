import { useLocation } from 'react-router-dom';

const useClubId = () => {
  const { pathname } = useLocation();
  const pathArray = pathname.split('/');

  const clubIndex = pathArray.findIndex((path) => path === 'club');

  if (clubIndex === -1) throw new Error('path에서 클럽 아이디를 찾을 수 없습니다.');

  try {
    const clubId = pathArray[clubIndex + 1];
    return { clubId };
  } catch {
    throw new Error('path에서 클럽 아이디를 찾을 수 없습니다.');
  }
};

export default useClubId;
