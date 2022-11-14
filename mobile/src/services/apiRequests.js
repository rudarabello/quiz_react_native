import { api } from './api';

export const getDataToQuiz = async () => {
  return api.get('/quiz');
};

export const putCompleteQuiz = async (id) => {
  return api.put(`/quiz/${id}/complete`);
};
