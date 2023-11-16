import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import SubmittedForms from '@/components/SubmittedForms/SubmittedForms';
import Header from '@/components/common/Header/Header';

const SubmittedFormsPage = () => {
  //#TODO: 머지된 뒤 페이지 만들기
  return (
    <>
      <Header>
        <SearchInputForm />
      </Header>
      <SubmittedForms />
    </>
  );
};

export default SubmittedFormsPage;
