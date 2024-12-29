import { TextField } from "@mui/material";

interface Props {
  onAmount: (amount: number) => void;
}

const Amount = ({ onAmount }: Props) => {
  return (
    <TextField
      onChange={(e) => onAmount(Number(e.target.value))}
      id="outlined-number"
      label="Amount"
      type="number"
    />
  );
};

export default Amount;
