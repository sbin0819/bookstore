import Recommendation from '@/features/recomendation/components/recomendation';
import { getSearch } from '@/services/search';

const RecommendationPage = async () => {
  const data = await getSearch({
    query: '자바스크립트',
    display: 30,
  });

  return <Recommendation books={data.items} />;
};

export default RecommendationPage;
