
import { LoadMoreBtn } from './Button.styled';

export const Button = ({ onClick, name }) => {
  return <LoadMoreBtn onClick={onClick}>{name}</LoadMoreBtn>;
};

