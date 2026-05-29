import LegalPage, { Section, BulletList } from '../../components/LegalPage'

export const metadata = { title: 'Privacy Policy — Betmund' }

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="28 May 2026">

      <Section title="What is Betmund">
        <p className="text-base leading-relaxed">
          Betmund is a World Cup prediction league app. This policy explains what data we collect,
          why we collect it, and how it is used.
        </p>
      </Section>

      <Section title="Data We Collect">
        <BulletList items={[
          'Account data: email address, display name, username, avatar metadata, and login provider identifiers.',
          'League data: leagues created or joined, invite codes, member roles, and league settings.',
          'Prediction data: Profeta picks, Arena picks where enabled, award picks, rankings, and scoring events.',
          'Technical data: authentication events, logs, device/browser information, and service diagnostics needed to operate the app.',
        ]} />
      </Section>

      <Section title="How We Use Data">
        <BulletList items={[
          'Create accounts and authenticate users.',
          'Create leagues, save predictions, calculate rankings, and show league history.',
          'Provide support, prevent abuse, debug issues, and improve Betmund.',
        ]} />
      </Section>

      <Section title="Third-Party Services">
        <p className="text-base leading-relaxed">
          Betmund uses Supabase for authentication, database, and backend services. If users sign
          in with Google, Google also processes sign-in data according to Google's own policies.
        </p>
      </Section>

      <Section title="Sharing">
        <p className="text-base leading-relaxed">
          We do not sell personal data. League members can see league-related information required
          for gameplay, such as display names, locked picks where applicable, rankings, and scores.
        </p>
      </Section>

      <Section title="Retention and Deletion">
        <p className="text-base leading-relaxed">
          We keep account and league data while an account is active or while needed to operate
          leagues, prevent abuse, comply with legal obligations, or resolve disputes. Users can
          request account deletion in the app from <strong>Settings → Delete account</strong> or
          by contacting support.
        </p>
      </Section>

      <Section title="Contact">
        <p className="text-base leading-relaxed">
          Privacy questions and deletion requests:{' '}
          <a href="mailto:support@betmund.com" className="text-[#3A12A3] font-semibold hover:underline">
            support@betmund.com
          </a>
        </p>
      </Section>

    </LegalPage>
  )
}
