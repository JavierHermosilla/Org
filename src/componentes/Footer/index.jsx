import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/javier-hermosilla-625757164/'>
                <img className="iamgen_linkedin" src="/img/linkedin.png" alt='linkedin' />
            </a>
            <a href='https://instagram.com'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
            <a href='https://twitter.com'>
                <img src="/img/twitter.png" alt='instagram' />
            </a>
        </div>
        <img className="logo_footer" src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Javier Hermosilla</strong>
    </footer>
}

export default Footer