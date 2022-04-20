import React, { useState } from "react";
import {
  Tooltip,
  Fab,
  Modal,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EventIcon from "@mui/icons-material/Event";
const Add = () => {
  const [open, setOpen] = useState(false);

  const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,

          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={500}
          height={380}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create your Own Food Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Travis Howard"
              src="https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg"
            />
            <Typography fontWeight={500} variant="6">
              Johanna
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your Mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={2}>
            <EmojiEmotionsIcon color="primary" />
            <VideoCameraBackIcon color="secondary" />
            <AddPhotoAlternateIcon color="error" />
            <PersonAddIcon
              color="
              success"
            />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100%" }}>
              <EventIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyleModal>
    </>
  );
};

export default Add;
