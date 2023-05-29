import Button from "@mui/material/Button";
import Style from "./LoginStyle.module.scss";

function LoginPage() {
  return (
    <div className={Style.container}>
      <div className={Style.formContainer}>
        <form action="">
          <label htmlFor="username">
            Username
            <input id="username" name="username" type="text" />
            <i />
          </label>
          <label htmlFor="password">
            Password
            <input id="password" name="password" type="text" />
            <i />
          </label>
          <div>
            <Button
              sx={{ width: { sm: 200, lg: 500, md: 300 } }}
              variant="contained"
              color="primary"
            >
              Button
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
