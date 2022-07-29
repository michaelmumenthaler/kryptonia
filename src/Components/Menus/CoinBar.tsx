import Stack from "@mui/material/Stack";
import { Divider, Fab } from "@mui/material";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import CoinButton from "./CoinButton";
import MenuModal from "./MenuModal";
import { useState } from "react";

export default function CoinBar() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);

  return (
    <>
      <Stack spacing={15} direction="row" alignSelf={"center"}>
        <Fab
          style={{
            backgroundColor: "#F5C900",
            filter: "drop-shadow(0 0 10px #F5C900)",
          }}
        >
          <DisplaySettingsIcon />
        </Fab>
        <Stack
          spacing={1}
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          paddingBottom={2}
        >
          <CoinButton symbol="A" color="#00db3e" onClick={handleModalOpen} />
          <CoinButton symbol="B" color="#F5453D" />
          <CoinButton symbol="Γ" color="#0288d1" />
          <CoinButton symbol="Δ" color="" />
          <CoinButton symbol="Ε" color="" />
          <CoinButton symbol="Ζ" color="" />
          <CoinButton symbol="Η" color="" />
        </Stack>
      </Stack>
      <MenuModal modalOpen={modalOpen} handleModalClose={setModalOpen} />
    </>
  );
}
