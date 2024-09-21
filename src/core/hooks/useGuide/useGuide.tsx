import axios from 'axios';
import { GuideBox } from '@/presentation/components/GuideBox/GuideBox';

export const useGuide = () => {
  const getGuidesData = async () => {
    try {
      const response = await axios.get('https://take-a-guide.com/guides');
      const data = response.data;
      return data;
    } catch (e) {
      return;
    }
  };

  const renderGuideBoxes = () => {};

  return {
    renderGuideBoxes,
  };
};
