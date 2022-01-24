import Stack from "@mui/material/Stack";
import ComputerImage from "../Assets/GrandmasRig.png";
import AlphaCoin, { IAlphaCoin } from "./Coins/Alpha";

export default function CenterField() {
  const ac: IAlphaCoin = { multiplier: 1, incrementStep: 2 };
  return (
    <Stack
      alignSelf={"center"}
      height={"80vh"}
      alignItems={"center"}
      justifyContent={"center"}
      flexGrow={1}
    >
      <a onClick={() => AlphaCoin(ac)} style={{ cursor: "pointer" }}>
        <img
          src={ComputerImage}
          alt="Computer"
          width="135"
          height="120"
          style={{
            imageRendering: "pixelated",
            filter: "drop-shadow(0 0 100px #0ff)",
          }}
        />
      </a>
    </Stack>
  );
}
