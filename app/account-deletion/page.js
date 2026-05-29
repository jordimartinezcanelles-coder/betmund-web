import LegalPage, { Section } from '../../components/LegalPage'

export const metadata = { title: 'Account Deletion — Betmund' }

export default function AccountDeletion() {
  return (
    <LegalPage title="Account Deletion">

      <Section title="Delete your account from the app">
        <p className="text-base leading-relaxed mb-4">
          The easiest way to delete your account is directly inside the Betmund app:
        </p>
        <ol className="space-y-2">
          {[
            'Open the Betmund app.',
            'Go to Settings (tap your profile icon).',
            'Tap Delete account.',
            'Confirm the deletion.',
          ].map((step, i) => (
            <li key={i} className="flex gap-3 text-base leading-relaxed">
              <span className="w-6 h-6 rounded-full bg-[#3A12A3] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Request deletion by email">
        <p className="text-base leading-relaxed mb-4">
          If you can no longer access the app, you can request account deletion by emailing us from
          the address associated with your account.
        </p>
        <a
          href="mailto:support@betmund.com"
          className="inline-flex items-center gap-2 bg-[#3A12A3] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#25006F] transition-colors"
        >
          support@betmund.com
        </a>
      </Section>

      <Section title="What gets deleted">
        <p className="text-base leading-relaxed">
          Deleting your account removes your profile, predictions, and personal data. League
          history and anonymised aggregate scores may be retained as needed to operate existing
          leagues, prevent abuse, or comply with legal obligations.
        </p>
      </Section>

    </LegalPage>
  )
}
