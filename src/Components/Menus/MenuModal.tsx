import { Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";

interface IMenuModal {
  modalOpen: boolean;
  handleModalClose: (newModalOpenState: boolean) => void;
}

export default function MenuModal(props: IMenuModal) {
  const [open, setOpen] = useState(props.modalOpen);
  const handleClose = () => props.handleModalClose(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Typography>LMAO</Typography>
    </Modal>
  );
}
