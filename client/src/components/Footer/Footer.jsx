import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./footer.module.css";
import FacebookOutlined from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import footerLogo from "../../Assets/Images/evangadi-logo-footer.png";

function Footer() {
  return (
    <div className={classes.footer}>
      <div>
        <div className={classes.footer_logo}>
          <Link to="/">
            <img
              src={footerLogo}
              alt=" evangagadi logo"
            />
          </Link>
        </div>
        <div className={classes.footer_icons}>
          <a href="https://www.facebook.com/evangaditech" target="_blank">
            <FacebookOutlined style={{ fontSize: "35px" }} />
          </a>
          <a href="https://www.instagram.com/evangaditech/" target="_blank">
            <InstagramIcon style={{ fontSize: "35px" }} />
          </a>
          <a href="https://www.youtube.com/@EvangadiTech" target="_blank">
            <YouTubeIcon style={{ fontSize: "40px" }} />
          </a>
        </div>
      </div>
      <div className={classes.footer_links}>
                 <h4 style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>
                 Useful Links
          </h4>
        <ul className={classes.footer_ul}>
          <li className={classes.term}>
            <Link
              to="/howitworks"
              style={{
                textDecoration: "none",
                color: "#959CA4",
                paddingLeft: "0",
              }}
            >
              How it works
            </Link>
          </li>
          <li className={classes.term}>
            <Link
              to="/Terms/"
              style={{
                textDecoration: "none",
                color: "#959CA4",
                paddingLeft: "0",
              }}
            >
              Terms of Serivce
            </Link>
          </li>
          <li className={classes.privacy}>
            <Link
              to="/PrivacyPolicy"
              style={{ textDecoration: "none", color: "#959CA4" }}
            >
              Privacy policy
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.footer_contacts}>
          <h4 style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>
            Contact Info
          </h4>
          <ul className={classes.footer_ul}>
          <li>Evangadi Networks</li>
          <li>support@evangadi.com</li>
          <li>+1-202-386-2702</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
