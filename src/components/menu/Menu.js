import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Link } from "react-router-dom";
export default function NavbarMenu({ title, items }) {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            sx={{
              my: 2,
              display: "block",
              color: "#888",
              fontFamily: "Nunito",
              textDecoration: "none",
            }}
            {...bindTrigger(popupState)}
          >
            {title}
          </Button>
          <Menu {...bindMenu(popupState)}>
            {items.map((item, idx) => (
              <MenuItem key={idx} component={Link} to={item.link}>
                {item.name}
              </MenuItem>
            ))}

            {/* <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem> */}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
