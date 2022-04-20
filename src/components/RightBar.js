import React from "react";
import {
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Food lovers
        </Typography>
        <AvatarGroup max={8}>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_960_720.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_960_720.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://cdn.pixabay.com/photo/2016/11/29/20/22/girl-1871104_960_720.jpg"
          />
          <Avatar
            alt="Treammy"
            src="https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_960_720.jpg"
          />
          <Avatar
            alt="Johanna"
            src="https://cdn.pixabay.com/photo/2017/06/09/17/11/model-2387582_960_720.jpg"
          />
          <Avatar
            alt="Sanni"
            src="https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg"
          />
          <Avatar
            alt="Linda"
            src="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_960_720.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} sx={{ mt: "20px" }}>
          Latest Photos
        </Typography>
        <ImageList
          sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={2}
          rowHeight={150}
          gap={15}
        >
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
              alt="salmon"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg"
              alt="pizza"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg"
              alt="burger"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg"
              alt="pancake"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg"
              alt="cake"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_960_720.jpg"
              alt="steak"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2017/09/28/18/13/bread-2796393__340.jpg"
              alt="eggs"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2017/06/02/18/24/watermelon-2367029_960_720.jpg"
              alt="eggs"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} sx={{ mt: 5 }}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://cdn.pixabay.com/photo/2017/06/09/17/11/model-2387582_960_720.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Johanna, Suman, Sanni
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
