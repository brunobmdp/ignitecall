import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'
import Image from 'next/image'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { NextSeo } from 'next-seo'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const session = useSession()
  const isSignedIn = session.status === 'authenticated'
  const router = useRouter()

  useEffect(() => {
    if (isSignedIn) {
      router.push(`/schedule/${session.data.user.username}`)
    }
    console.log('passou')
  }, [isSignedIn, router, session.data?.user.username])
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre"
      />
      <Container>
        <Hero>
          <Heading size="4xl">Agendamento descomplicado</Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>
          <ClaimUsernameForm />
        </Hero>
        <Preview>
          <Image
            src={previewImage}
            alt="Calendar symbolizing the application"
            height={400}
            quality={100}
            priority
          />
        </Preview>
      </Container>
    </>
  )
}
