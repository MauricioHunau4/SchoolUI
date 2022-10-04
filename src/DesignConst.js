import Background from "./components/assets/school-background.jpg"
import Suplies from './components/assets/suplies1.jpg'

//NavBar
export const navBar = {
    flexGrow: 1,
    position: "absolute",
    width: "100%",
    top: 0,
    zIndex: "1"
}

export const typographyNavBar = {
    fontSize: "56px",
    fontWeight: 100,
    lineHeight: "68px",
    color: 'black',
}

//Foot
export const foot = {
    width: "100%",
    bgcolor: "#F2994A",
    height: "10%",
    bottom: 0,
    position: "absolute"
}

//Main
export const mainBackgroundImage = {
    backgroundImage: `url(${Background})`,
    display: "flex",
    justifyContent: "space-evenly",
    padding: "150px 0 75px 0"
}

export const flexMainInfoAndIcon = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "40%",
    bgcolor: "#1D1D1D",
}

export const typographyInfo = {
    color: "#FFFF",
    position: "static",
    wordWrap: "break-word",
    padding: "0 60px",
    textAlign: "center"
}

export const flexSchoolChoose = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: "60px 0 0 0",
    padding: "0 0 70px 0"
}

export const boxEmailAndPhrase = {
    display: "flex",
    flexDirection: "row",
    bgcolor: "#1D1D1D",
    justifyContent: "space-evenly",
    padding: "70px 0",
    alignItems: "center"
}

export const typographyPhrase = {
    color: "#FFFFFF",
    fontWeight: 100,
    wordWrap: "break-word",
    width: "25%"
}

//Login

export const backgroundLogin = {
    position: "absolute",
    backgroundImage: `url(${Suplies})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "center",
    height: "auto",
    padding: "150px 0",
    width: "100%",
    top: "0",
    bottom: "0"
}

export const boxForm = {
    bgcolor: "#1D1D1D",
    margin: "auto",
    width: "30%",
    padding: "2%",
}

export const radioGroup = {
    padding: "10px 0",
    bgcolor: "#D9D9D9",
    width: "95%",
    borderRadius: "15px",
    position: "relative",
    margin: "auto"
}

export const textFieldLogin = {
    bgcolor: "#D9D9D9",
    margin: "20px 10px",
    borderRadius: "4px",
    width: "90%"
}

export const buttonLogin = {
    bgcolor: "#F2994A",
    borderRadius: 20,
    width: "80%",
    margin: "auto",
    "&:hover": {
        bgcolor: "#E46B00"
    }
}

export const buttonBack = {
    bgcolor: '#F2994A',
    width: "10%",
    margin: "auto",
    borderRadius: 20,
    "&:hover": {
        bgcolor: "#E46B00"
    }
}

//Table

export const tableDesign = {
    width: '90%',
    overflow: 'hidden',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: 'translate(-50%, 10%)'
}

//Modal

export const modalEstructure = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'antiquewhite',
    border: 'none',
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
    justifyContent: "center",
    alignItems: "center"
}

export const modalTypography = {
    bgcolor: "white",

}

//Adding

export const tableAdding = {
    position:"absolute", 
    top: "50%", 
    left:"50%", 
    transform:"translate(-50%, 10%)", 
    width:"90%", 
    bgcolor:"white", 
    borderRadius:"5px",
    overflow:"auto",
    height:"500px"
}

export const letterHeadTable = {
    fontFamily: "Roboto,Helvetica,Arial,sans-serif;",
    fontWeight: "500",
    fontSize: "0.875rem",
    lineHeight: "1.5rem",
    letterSpacing: "0.01071em"
}

export const letterTable ={
    fontFamily: "Roboto,Helvetica,Arial,sans-serif;",
    fontWeight: "400",
    fontSize: "0.875rem",
    lineHeight: "1.43",
    letterSpacing: "0.01071em",
    width:"35px"
}

export const cellTable ={
    padding:"5px",
    display:"flex", 
    justifyContent:"space-around", 
    border:"0.5px solid #E6E6E6", 
    alignItems:"center"
}