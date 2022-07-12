import Link from 'next/link'
import { Button, Container } from 'reactstrap'
import styles from './styles.module.scss'

const HeaderNoAuth = () => {
    return (
        <>
            <div className={styles.ctaSection}>
                <img src="/homeNoAuth/logoCta.png" alt="Logo call to action" className={styles.imgCta}/>
                <p>Cadastre-se para ter acesso aos cursos!</p>
                <img src="/homeNoAuth/logoCta.png" alt="Logo call to action" className={styles.imgCta}/>
            </div>
            <Container className={styles.nav}>
                <img src="/logoOnebitflix.svg" alt="Logo da Onebitflix" className={styles.imgLogoNav}/>
                <div>
                    <Link href="/login">
                        <Button className={styles.navBtn} outline>Entrar</Button>
                    </Link>
                    <Link href="/register">
                        <Button className={styles.navBtn} outline>Quero fazer parte</Button>
                    </Link>
                </div>
            </Container>
        </>
    )
}

export default HeaderNoAuth