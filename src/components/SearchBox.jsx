import { Wrapper, Input, Button } from './SearchBox.styled';

export const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
    </Wrapper>
  );
};
