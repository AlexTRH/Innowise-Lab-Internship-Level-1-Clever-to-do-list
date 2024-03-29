import { useEffect, useState } from 'react';
import processingData from '../helpers/ProcessingData';
import { userSelector } from '../store/user/selector';
import { getPlans } from '../store/plans/selector';
import { useSelector } from 'react-redux';

import { importance } from '../constants/Button.constant';

const useIsImportant = (selected: Date) => {
  const plans = useSelector(getPlans);
  const [isNotImportant, setIsNotImportant] = useState(false);
  const [isImportant, setIsImportant] = useState(false);
  const [isVeryImportant, setIsVeryImportant] = useState(false);
  useEffect(() => {
    const yearMonth = processingData.toYearMonth(selected);
    const day = processingData.getDay(selected);
    if (plans[yearMonth]) {
      if (plans[yearMonth][day]) {
        setIsNotImportant(
          Object.values(plans[yearMonth][day]).some(
            (e) => e.important === importance[0].value
          )
        );
        setIsImportant(
          Object.values(plans[yearMonth][day]).some(
            (e) => e.important === importance[1].value
          )
        );
        setIsVeryImportant(
          Object.values(plans[yearMonth][day]).some(
            (e) => e.important === importance[2].value
          )
        );
      }
    }
  }, [plans]);
  return { isNotImportant, isImportant, isVeryImportant };
};
export default useIsImportant;
