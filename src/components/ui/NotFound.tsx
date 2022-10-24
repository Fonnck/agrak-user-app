import { Container, Image } from '@nextui-org/react'

import not_found from '../../assets/img/not_found.png'

export const NotFound = () => {
    return (
        <Container className="animate__animated animate__fadeIn">
            <Image
                src={not_found}
                alt='404 Page Not Found'
                css={{ maxWidth: '500px', height: 'auto'}}
            />
        </Container>
    )
}
