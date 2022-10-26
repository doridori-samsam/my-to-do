import { forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import useFireStore from "../../hooks/useFireStore";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ToDoDelete({ isOpen, onClose, contentId }) {
  const { delDocument } = useFireStore("Todos");

  //해당 리스트 삭제
  function handleDelete() {
    delDocument(contentId);
    onClose();
  }

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle
        sx={{
          fontSize: "1.2rem",
          fontFamily: "Pretendard-Medium",
          color: "black",
        }}
      >
        {"할 일을 끝내셨나보군요!👍"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-slide-description"
          sx={{
            fontSize: "0.9rem",
            fontFamily: "Pretendard-Regular",
          }}
        >
          정말 삭제할까요?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleDelete}
          sx={{ fontSize: "0.9rem", fontFamily: "Pretendard-Medium" }}
        >
          네
        </Button>
        <Button
          onClick={onClose}
          sx={{ fontSize: "0.9rem", fontFamily: "Pretendard-Medium" }}
        >
          아직요!
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ToDoDelete;
