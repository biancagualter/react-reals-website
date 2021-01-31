import React from 'react'
import Icon1 from '../../images/svg-7.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-4.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Nossos Serviços</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Redução de gastos</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis turpis id egestas laoreet</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Atendimento 24h</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis turpis id egestas laoreet</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Benefícios Premium</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis turpis id egestas laoreet</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
