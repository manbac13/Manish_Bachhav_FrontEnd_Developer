import spacexLogo from "../images/spacex-logo-svg-vector.svg"

const Header = ()=>{
    return(
        <>
            <header className="main-header">
                <img src={spacexLogo} style={{width:"20%", height:"20%", color:"#fff"}}/>
            </header>
        </>
    )
}
export default Header;