import Link from "next/link"

const Footer = () => {
    return (
        <footer className='p-3'>
            <div className='row'>
                <div className='col text-center'>
                    Copyright <i className="far fa-copyright fa-sm"></i> <span style={{letterSpacing: '-.025rem',}}> {new Date().getFullYear()}</span> TINY HOUSE
                    <br/>All Rights Reserved | <Link href="/privacy-policy"><a>Privacy Policy</a></Link> | <Link href='/cookie-policy'><a>Cookie Policy</a></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer