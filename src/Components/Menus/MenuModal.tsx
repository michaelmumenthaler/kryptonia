import { Box, Paper, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";

interface IMenuModal {
  modalOpen: boolean;
  handleModalClose: (newModalOpenState: boolean) => void;
  children?: React.ReactNode;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "50vw",
  maxWidth: "80vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function MenuModal(props: IMenuModal) {
  const handleClose = () => props.handleModalClose(false);

  return (
    <Modal open={props.modalOpen} onClose={handleClose}>
      <Box sx={style}>{props.children}</Box>
    </Modal>
  );
}
