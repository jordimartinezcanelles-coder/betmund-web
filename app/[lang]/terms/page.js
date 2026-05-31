import { redirect } from 'next/navigation'
import LegalPage, { Section, BulletList } from '../../../components/LegalPage'

const LANGS = ['en', 'es']

export async function generateMetadata({ params }) {
  const { lang } = await params
  return { title: lang === 'es' ? 'Términos y Condiciones — Betmund' : 'Terms and Conditions — Betmund' }
}

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export default async function Terms({ params }) {
  const { lang } = await params
  if (!LANGS.includes(lang)) redirect('/en/terms')

  if (lang === 'es') {
    return (
      <LegalPage title="Términos y Condiciones" lastUpdated="28 mayo 2026" lang="es">
        <Section title="Qué es Betmund">
          <p className="text-base leading-relaxed">
            Betmund permite a los usuarios crear o unirse a ligas privadas, hacer predicciones del Mundial
            y comparar rankings con otros miembros de la liga.
          </p>
        </Section>
        <Section title="Cuentas">
          <BulletList items={[
            'Los usuarios son responsables de mantener su inicio de sesión seguro.',
            'Los usuarios deben usar información de cuenta real y no pueden hacerse pasar por otra persona.',
            'Los usuarios pueden solicitar la eliminación de su cuenta desde la app en cualquier momento.',
          ]} />
        </Section>
        <Section title="Ligas y predicciones">
          <BulletList items={[
            'Los administradores de liga controlan la configuración de la liga y las invitaciones.',
            'Las predicciones pueden editarse en borrador y se bloquean cuando la app las marca como bloqueadas.',
            'Los rankings se calculan a partir de predicciones guardadas y los resultados del torneo disponibles en la app.',
          ]} />
        </Section>
        <Section title="Sin funciones de pago en V1">
          <p className="text-base leading-relaxed">
            Esta versión V1 no vende funciones digitales de pago en la app. Si en el futuro se añaden
            funciones de pago, se presentarán a través del flujo de compra de la tienda de apps correspondiente.
          </p>
        </Section>
        <Section title="Uso responsable">
          <BulletList items={[
            'No abuses de las invitaciones, ataques el servicio ni intentes acceder a los datos de otro usuario.',
            'No subas ni introduzcas contenido ilegal, abusivo o engañoso.',
            'Podemos eliminar cuentas o ligas que perjudiquen al servicio o a otros usuarios.',
          ]} />
        </Section>
        <Section title="Contacto">
          <p className="text-base leading-relaxed">
            Preguntas sobre estos términos:{' '}
            <a href="mailto:support@betmund.com" className="text-[#3A12A3] font-semibold hover:underline">
              support@betmund.com
            </a>
          </p>
        </Section>
      </LegalPage>
    )
  }

  return (
    <LegalPage title="Terms and Conditions" lastUpdated="28 May 2026" lang="en">
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
          "Do not abuse invitations, attack the service, or try to access another user's data.",
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
