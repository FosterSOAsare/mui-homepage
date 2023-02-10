import React from "react";
import { Container } from "@mui/system";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { AppBar } from "@mui/material";
import styles from "../../App.styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
const Navbar = () => {
	return (
		<AppBar className="navbar" position="fixed" sx={styles.navbar}>
			<Container maxWidth="lg" sx={styles.container}>
				<Box sx={styles.navbar__left}>
					<Logo />
					<div className="links" style={{ marginLeft: "20px" }}>
						<Button variant="text" sx={styles.nav__button}>
							Products
						</Button>
						<Button variant="text" sx={styles.nav__button}>
							Docs
						</Button>
						<Button variant="text" sx={styles.nav__button}>
							Pricing
						</Button>
						<Button variant="text" sx={styles.nav__button}>
							About us
						</Button>
						<Button variant="text" sx={styles.nav__button}>
							Blog
						</Button>
					</div>
				</Box>
				<Box sx={styles.nav__right}>
					<Box sx={styles.nav__right__search}>
						<SearchIcon sx={{ color: "#66B2FF", fontSize: "20px", fontWeight: "bold" }} />
						<Typography variant="p" sx={{ fontSize: "13px", fontFamily: "'Roboto' , sans-serif", opacity: "0.5" }}>
							Search...
						</Typography>
						<Box
							sx={{
								marginLeft: "auto",
								width: "60px",
								borderRadius: "6px",
								backgroundColor: "#001E3C",
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
								border: "1px solid #132F4C",
								height: "20px",
							}}>
							<Typography variant="p" sx={{ fontWeight: "bold", fontSize: "11px", fontFamily: "'Roboto' , sans-serif" }}>
								Ctrl + K
							</Typography>
						</Box>
					</Box>
					<Box sx={styles.nav__actions}>
						<GitHubIcon
							sx={{
								color: "#66b2ff",
								fontSize: "19px",
							}}
						/>
					</Box>
					<Box sx={styles.nav__actions}>
						<WbSunnyIcon
							sx={{
								color: "#66b2ff",
								fontSize: "19px",
							}}
						/>
					</Box>
				</Box>
			</Container>
		</AppBar>
	);
};

export default Navbar;
