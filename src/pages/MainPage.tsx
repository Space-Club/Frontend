import Avatar from '@/components/common/Avatar/Avatar';

const MainPage = () => {
  return (
    <div>
      <Avatar avatarShape="small" />
      <Avatar avatarShape="normal" />
      <Avatar avatarShape="rectangle" />
      <Avatar avatarShape="medium" />
      <Avatar avatarShape="medium" isEdit={true} />
      <Avatar avatarShape="large" isEdit={true} />
    </div>
  );
};

export default MainPage;
