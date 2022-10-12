import { IconButton, Popover, Typography } from "@mui/material";
import { useState } from "react";
import CommentIcon from '@mui/icons-material/Comment';

export default function CheckComment(props) {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    if (props.commented !== "") {
      return (<>
        <IconButton sx={{ height: "20px", color: "gray" }} onClick={handleClick}>
          <CommentIcon />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>{props.commented}</Typography>
        </Popover>
      </>
      )
    } else {
      return (<></>)
    }
}