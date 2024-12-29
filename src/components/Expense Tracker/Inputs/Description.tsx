import { TextField } from "@mui/material";

interface Props {
  onDescription: (inputDescription: string) => void;
}

const Description = ({ onDescription }: Props) => {
  return (
    <TextField
      onChange={(e) => onDescription((e.target as HTMLInputElement).value)}
      type="text"
      required
      id="description-input"
      placeholder="Description"
      // defaultValue="Hello World"
    />
  );
};

export default Description;
