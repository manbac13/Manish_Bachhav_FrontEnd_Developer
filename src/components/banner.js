import bannerImage from "../images/spacex-6SbFGnQTE8s-unsplash.jpg"

const Banner = () => {
    return (
        <>
            <section className="banner-section">
                <div className="banner-info-div">
                    <p className="banner-info-header">Making Humanity Multiplanetary</p>

                    <p>Building on the achievements of Falcon 9 and Falcon Heavy, 
                        SpaceX is working on a next generation of fully reusable launch vehicles that will be the most powerful ever built, 
                        capable of carrying humans to Mars and other destinations in the solar system.
                    </p>

                </div>
                <img src={bannerImage} alt="Banner" style={{width:"60%"}}/>
            </section>

        </>
    )
}
export default Banner;