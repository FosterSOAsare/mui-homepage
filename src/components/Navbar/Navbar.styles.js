export let navbarStyles = {
	navbar: {
		width: "100%",
		height: 60,
		backgroundColor: "#0A1929",
		borderBottom: "1px solid #001E3C",
	},
	navbar__left: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	nav__button: {
		color: "white",
		textTransform: "none",
		borderRadius: "10px",
		fontSize: "14px",
		height: "40px",
		"&:hover": {
			backgroundColor: "#132F4C",
		},
	},

	nav__right: {
		height: "auto",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		gap: "10px",
	},
	nav__right__search: {
		height: "32px",
		paddingInline: "10px",
		width: "170px",
		borderRadius: "8px",
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		border: "1px solid #132F4C",
		gap: "7px",
		"&:hover": {
			backgroundColor: "#132F4C",
		},
	},

	nav__actions: {
		borderRadius: "10px",
		border: "1px solid #132F4C",
		alignItems: "center",
		justifyContent: "center",
		display: "flex",
		padding: "5px",
		height: "22px",
		width: "22px",
		"&:hover": {
			backgroundColor: "#132F4C",
		},
	},
};
