import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="appFooter">
      <Typography.Link href="#" target={"_blank"}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="#" target={"_blank"}>
        Terms & Conditions
      </Typography.Link>
      <Typography.Link href="#" target={"_blank"}>
        Return Policy
      </Typography.Link>
      <Typography.Link href="#" target={"_blank"}>
        +123456789
      </Typography.Link>
    </div>
  );
}
export default AppFooter;