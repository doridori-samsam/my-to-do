import { useState } from "react";
import useFireStore from "../../hooks/useFireStore";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Box from "@mui/material/Box";

function ToDoEdit({ open, onClose, cancelClick, contentId, title, content }) {
  const { updateDocument } = useFireStore("Todos");

  /** 투두리스트 콘텐츠*/
  const [todoData, setTodoData] = useState({
    title: title,
    content: content,
  });

  /** 제목, 내용 수정 handle 함수*/
  function handleEditTodo(e) {
    const { name, value } = e.target;
    setTodoData({ ...todoData, [name]: value });
  }

  /** 투두리스트 내용 유효 검사 state*/
  const [isFailed, setIsFailed] = useState({
    checkTitle: false,
    checkContent: false,
  });

  /** 수정 완료 클릭 */
  async function submitEdit(e) {
    e.preventDefault();
    if (todoData.title.length <= 0) {
      setIsFailed({ checkTitle: true });
    } else if (todoData.content.length <= 0) {
      setIsFailed({ checkContent: true });
    } else {
      updateDocument(contentId, todoData);
      onClose();
    }
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          paddingLeft: "15px",
          color: "#4485ff;",
          fontFamily: "Pretendard-Regular",
          fontSize: "1.5rem",
        }}
      >
        <BorderColorIcon
          sx={{
            fontFamily: "Pretendard-Regular",
            fontSize: "22px",
            verticalAlign: "base-line",
          }}
        />
        할 일
      </DialogTitle>
      <DialogContent sx={{ padding: "15px" }}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="title"
          label="제목"
          type="text"
          variant="standard"
          defaultValue={title}
          onChange={handleEditTodo}
          error={isFailed.checkTitle}
          sx={{ marginBottom: "20px", fontFamily: "Pretendard-Medium;" }}
        />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { mt: "10px", width: "35ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-multiline-static"
              label="내용"
              name="content"
              multiline
              defaultValue={content}
              error={isFailed.checkContent}
              onChange={handleEditTodo}
              rows={10}
              sx={{ fontFamily: "Pretendard-ExtraLight" }}
            />
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button type="submit" onClick={submitEdit}>
          확인
        </Button>
        <Button onClick={cancelClick}>취소</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ToDoEdit;
