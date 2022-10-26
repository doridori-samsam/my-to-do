import { useState } from "react";
import ToDoEdit from "../Modal/ToDoEdit";
import ToDoDelete from "../Modal/ToDoDelete";
import { EditBtnWrapper, BtnBackGround } from "./Style";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function ListInnerBtn({ contentId, title, content }) {
  const token = localStorage.getItem("token");

  //휴지통 아이콘 클릭 시 알림창
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  //수정 아이콘 클릭 시 모달 창 open
  const [editOpen, setEditOpen] = useState(false);

  function handleEditOpen() {
    setEditOpen(true);
  }

  function handleEditClose() {
    setEditOpen(false);
  }

  return (
    <EditBtnWrapper>
      <BtnBackGround onClick={handleEditOpen}>
        <BorderColorIcon
          sx={{
            color: "#CCCCCC;",
            fontSize: "1.5rem",
            mt: "7px",
          }}
        />
      </BtnBackGround>
      <BtnBackGround onClick={handleClickOpen}>
        <DeleteForeverIcon
          sx={{
            color: "#CCCCCC",
            fontSize: "1.8rem",
            mt: "6px",
          }}
        />
      </BtnBackGround>
      {open === true ? (
        <ToDoDelete onClose={handleClose} contentId={contentId} isOpen={open} />
      ) : null}
      {editOpen === true ? (
        <ToDoEdit
          open={editOpen}
          onClose={handleEditClose}
          cancelClick={handleEditClose}
          contentId={contentId}
          title={title}
          content={content}
        />
      ) : null}
    </EditBtnWrapper>
  );
}

export default ListInnerBtn;
