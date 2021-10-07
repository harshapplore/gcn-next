import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Footer from "@/shared/Footer";

const TermsAndConditions = () => {
    return (
        <>
            <Header nav={<Nav />} />
            <div className="container" style={{minHeight:"50vh"}} >
                <p style={{marginTop:"20px"}} >Terms and conditions</p>
            </div>
        <Footer/>
        </>
    )
}

export default TermsAndConditions;
