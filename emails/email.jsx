// Example Email Template which uses @react-email/components with Tailwind
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import * as React from 'react'

const baseUrl = 'https://www.vercel.com'

export const VercelInviteUserEmail = ({
  username = 'zenorocha',
  userImage = `${baseUrl}/static/vercel-logo.png`,
  invitedByUsername = 'bukinoshita',
  invitedByEmail = 'bukinoshita@example.com',
  teamName = 'My Project',
  teamImage = `${baseUrl}/static/vercel-team.png`,
  inviteLink = 'https://vercel.com/teams/invite/foo',
  inviteFromIp = '204.13.186.218',
  inviteFromLocation = 'São Paulo, Brazil',
}) => {
  const previewText = `Join ${invitedByUsername} on Vercel`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className='mx-auto my-auto bg-white font-sans'>
          <Container className='mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]'>
            <Section className='mt-[32px]'>
              <Img
                src={`${baseUrl}/static/vercel-logo.png`}
                width='40'
                height='37'
                alt='Vercel'
                className='mx-auto my-0'
              />
            </Section>
            <Heading className='mx-0 my-[30px] text-center font-normal text-[24px] text-black'>
              Join our <strong>{teamName}</strong> on <strong>Vercel</strong>
            </Heading>
            <Text className='leading-[24px] text-[14px] text-black'>
              Hello {username},
            </Text>
            <Text className='leading-[24px] text-[14px] text-black'>
              <strong>bukinoshita</strong> (
              <Link
                href={`mailto:${invitedByEmail}`}
                className='text-blue-600 no-underline'
              >
                {invitedByEmail}
              </Link>
              ) has invited you to the <strong>{teamName}</strong> team on{' '}
              <strong>Vercel</strong>.
            </Text>
            <Section>
              <Row>
                <Column align='right'>
                  <Img
                    className='rounded-full'
                    src={userImage}
                    width='64'
                    height='64'
                  />
                </Column>
                <Column align='center'>
                  <Img
                    src={`${baseUrl}/static/vercel-arrow.png`}
                    width='12'
                    height='9'
                    alt='invited you to'
                  />
                </Column>
                <Column align='left'>
                  <Img
                    className='rounded-full'
                    src={teamImage}
                    width='64'
                    height='64'
                  />
                </Column>
              </Row>
            </Section>
            <Section className='mb-[32px] mt-[32px] text-center'>
              <Button
                className='rounded bg-[#000000] px-4 py-2 text-center font-semibold text-[12px] text-white no-underline'
                href={inviteLink}
              >
                Join the team
              </Button>
            </Section>
            <Text className='leading-[24px] text-[14px] text-black'>
              or copy and paste this URL into your browser:{' '}
              <Link href={inviteLink} className='text-blue-600 no-underline'>
                {inviteLink}
              </Link>
            </Text>
            <Hr className='mx-0 my-[26px] w-full border border-solid border-[#eaeaea]' />
            <Text className='leading-[24px] text-[#666666] text-[12px]'>
              This invitation was intended for{' '}
              <span className='text-black'>{username} </span>.This invite was
              sent from <span className='text-black'>{inviteFromIp}</span>{' '}
              located in{' '}
              <span className='text-black'>{inviteFromLocation}</span>. If you
              were not expecting this invitation, you can ignore this email. If
              you are concerned about your account's safety, please reply to
              this email to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default VercelInviteUserEmail
