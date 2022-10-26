import { useState } from "react";
import { todayMonth, todayWeek, todayDate } from "../../components/Today";
import useAuthContext from "../../hooks/useAuthContext";
import useCollection from "../../hooks/useCollection";
import useLogOut from "../../hooks/useLogOut";
import ToDoList from "./ToDoList";
import ToDoCreate from "../../components/Modal/ToDoCreate";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ToDoHeader, ToDoTitle, Day, MonthDate, BtnText } from "./Style";

function ToDoPage() {
  const { logout } = useLogOut();
  const { user } = useAuthContext();
  const { documents, error } = useCollection("Todos", [
    "userId",
    "==",
    user.uid,
  ]);

  //MUI 로그아웃 버튼 함수
  const [anchorEl, setAnchorEl] = useState(null);
  const isShow = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function handleClose() {
    setAnchorEl(null);
  }

  function handleLogOut() {
    setAnchorEl(null);
    logout();
  }

  //새 리스트 작성 버튼 클릭 함수
  const [open, setOpen] = useState(false);

  function handleModalOpen() {
    setAnchorEl(null);
    setOpen(true);
  }
  function handleModalClose() {
    setOpen(false);
  }

  return (
    <>
      <ToDoHeader>
        <ToDoTitle>나의 할 일</ToDoTitle>
        <IconButton
          sx={{
            float: "right",
          }}
          id="basic-button"
          aria-controls={isShow ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isShow ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon sx={{ fontSize: 40, color: "#4485ff;" }} />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={isShow}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleModalOpen}>
            <BtnText>새 리스트 작성</BtnText>
          </MenuItem>
          <MenuItem onClick={handleLogOut}>
            <BtnText>로그아웃</BtnText>
          </MenuItem>
        </Menu>
        <div>
          <Day>{todayWeek}</Day>
        </div>
        <MonthDate>
          {todayMonth}&nbsp;
          {todayDate}일
        </MonthDate>
      </ToDoHeader>
      {documents && <ToDoList mapdata={documents} />}

      {open && (
        <ToDoCreate
          onClose={handleModalClose}
          open={open}
          cancelClick={handleModalClose}
        />
      )}
    </>
  );
}

export default ToDoPage;
