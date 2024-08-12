import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";

const Homepage = () => {
  const todoStyled = {
    flexGrow: 1,
    p: 1,
    border: "1px solid #ccc",
    borderRadius: 1,
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const layout = {
    padding: 2,
    width: "412px",
    margin: "0 auto",
  };

  return (
    <Box sx={layout}>
      {/* usercard 컴포넌트로 대체 */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar>icon</Avatar>
            <Box sx={{ ml: 2 }}>
              <Typography variant="body1">유저 ID</Typography>
              <Typography variant="body2">good morning!</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1">To do list</Typography>
        <Card sx={{ mt: 2 }}>
          <CardContent>
            {/* 카드컨텐츠에 날씨 위젯 import 해오기*/}
            <Typography variant="subtitle1">날씨 위젯 ui</Typography>
          </CardContent>
        </Card>
      </Box>
      {/*팀 이미지*/}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="subtitle1">팀 이미지</Typography>
        </CardContent>
      </Card>
      <Box sx={{ mb: 2 }}>
        {/*투두리스트 컴포넌트 임포트*/}
        <Typography variant="subtitle1">To do list</Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2, gap: "5px" }}>
          <Box sx={todoStyled}>
            <Typography variant="body2">todo title</Typography>
          </Box>
          <Box sx={todoStyled}>
            <IconButton>
              <AddIcon />
            </IconButton>
          </Box>
          <Box sx={todoStyled}>
            <IconButton>
              <AddIcon />
            </IconButton>
          </Box>
          <Box sx={todoStyled}>
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mb: 2 }}>
        {/*뉴스레터 컴포넌트 임포트*/}
        <Typography variant="subtitle1">News Letter</Typography>
        <Card sx={{ mb: 1 }}>
          <CardContent>
            <Typography variant="body2">Title</Typography>
            <Typography variant="caption">상단 20글자까지 제한</Typography>
          </CardContent>
        </Card>
      </Box>
      <Box>{/*사이드바 임포트 */}</Box>
    </Box>
  );
};

export default Homepage;
