import LegalPage, { Section, BulletList } from '../../components/LegalPage'

export const metadata = { title: 'Terms and Conditions — Betmund' }

export default function Terms() {
  return (
    <LegalPage title="Terms and Conditions" lastUpdated="28 May 2026">

      <Section title="What Betmund Is">
        <p className="text-base leading-relaxed">
          Betmund lets users create or join private leagues, make World Cup predictions, and compare
          rankings with other league members.
        </p>
      </Section>

      <Section title="Accounts">
        <BulletList items={[
          'Users are responsible for keeping their login secure.',
          'Users must use accurate account information and may not impersonate another person.',
          'Users can request account deletion from the app at any time.',
        ]} />
      </Section>

      <Section title="Leagues and Predictions">
        <BulletList items={[
          'League admins control league setup and invitations.',
          'Predictions may be editable while in draft and become locked when the app marks them as locked.',
          'Rankings are calculated from saved predictions and tournament results available in the app.',
        ]} />
      </Section>

      <Section title="No Paid Features in V1">
        <p className="text-base leading-relaxed">
          This V1 release does not sell paid digital features in the app. If paid features are added
          later, they will be presented through the applicable app store purchase flow.
        </p>
      </Section>

      <Section title="Fair Use">
        <BulletList items={[
          'Do not abuse invitations, attack the service, or try to access another user\'s data.',
          'Do not upload or enter unlawful, abusive, or misleading content.',
          'We may remove accounts or leagues that harm the service or other users.',
        ]} />
      </Section>

      <Section title="Contact">
        <p className="text-base leading-relaxed">
          Questions about these terms:{' '}
          <a href="mailto:support@betmund.com" className="text-[#3A12A3] font-semibold hover:underline">
            support@betmund.com
          </a>
        </p>
      </Section>

    </LegalPage>
  )
}
