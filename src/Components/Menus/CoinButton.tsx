import { Fab, Typography } from "@mui/material";

interface ICoinButton {
  color: string;
  symbol: string;
  onClick?: () => void;
}

export default function CoinButton(props: ICoinButton) {
  return (
    <Fab
      style={{
        backgroundColor: props.color,
        filter: `drop-shadow(0 0 10px ${props.color})`,
      }}
      onClick={props.onClick}
    >
      <Typography variant="h4" component="div">
        {props.symbol}
      </Typography>
    </Fab>
  );
}
