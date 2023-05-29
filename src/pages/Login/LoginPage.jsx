import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Style from "./LoginStyle.module.scss";

function LoginPage() {
  return (
    <div className={Style.container}>
      <div className={Style.formContainer}>
        <form action="">
          <label htmlFor="username">
            Username
            <div>
              <input id="username" name="username" type="text" />
              <i />
            </div>
          </label>
          <label htmlFor="password">
            Password
            <div>
              <input id="password" name="password" type="text" />
              <i />
            </div>
          </label>
          <Button sx={{ width: "100%" }} variant="contained" color="primary">
            Button
          </Button>
          <FormControlLabel
            label="Remember me"
            sx={{
              flexDirection: "row !important",
            }}
            control={
              <Checkbox
                value=""
                // checked={}
                // onChange={}
                color="primary"
              />
            }
          />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
