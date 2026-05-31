import { redirect } from 'next/navigation'
import LegalPage, { Section, BulletList } from '../../../components/LegalPage'

const LANGS = ['en', 'es']

export async function generateMetadata({ params }) {
  const { lang } = await params
  return { title: lang === 'es' ? 'Política de Privacidad — Betmund' : 'Privacy Policy — Betmund' }
}

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

const content = {
  en: {
    title: 'Privacy Policy',
    date: '28 May 2026',
    sections: null, // rendered inline below
  },
  es: {
    title: 'Política de Privacidad',
    date: '28 mayo 2026',
  },
}

export default async function Privacy({ params }) {
  const { lang } = await params
  if (!LANGS.includes(lang)) redirect('/en/privacy')

  if (lang === 'es') {
    return (
      <LegalPage title="Política de Privacidad" lastUpdated="28 mayo 2026" lang="es">
        <Section title="Qué es Betmund">
          <p className="text-base leading-relaxed">
            Betmund es una app de ligas de predicción del Mundial. Esta política explica qué datos recopilamos,
            por qué los recopilamos y cómo se utilizan.
          </p>
        </Section>
        <Section title="Datos que recopilamos">
          <BulletList items={[
            'Datos de cuenta: dirección de email, nombre de usuario, avatar y credenciales del proveedor de inicio de sesión.',
            'Datos de liga: ligas creadas o unidas, códigos de invitación, roles de miembro y configuración de la liga.',
            'Datos de predicción: picks de Profeta, picks de Arena si está activado, picks de premios, rankings y eventos de puntuación.',
            'Datos técnicos: eventos de autenticación, registros, información de dispositivo/navegador y diagnósticos del servicio.',
          ]} />
        </Section>
        <Section title="Cómo usamos los datos">
          <BulletList items={[
            'Crear cuentas y autenticar usuarios.',
            'Crear ligas, guardar predicciones, calcular rankings y mostrar el historial de la liga.',
            'Ofrecer soporte, prevenir abusos, depurar problemas y mejorar Betmund.',
          ]} />
        </Section>
        <Section title="Servicios de terceros">
          <p className="text-base leading-relaxed">
            Betmund usa Supabase para autenticación, base de datos y servicios backend. Si los usuarios inician
            sesión con Google, Google también procesa los datos de inicio de sesión según sus propias políticas.
          </p>
        </Section>
        <Section title="Compartición de datos">
          <p className="text-base leading-relaxed">
            No vendemos datos personales. Los miembros de la liga pueden ver la información relacionada con la liga
            necesaria para el juego, como nombres de usuario, picks bloqueados donde corresponda, rankings y puntuaciones.
          </p>
        </Section>
        <Section title="Retención y eliminación">
          <p className="text-base leading-relaxed">
            Conservamos los datos de cuenta y liga mientras la cuenta esté activa o mientras sea necesario para operar
            las ligas, prevenir abusos, cumplir obligaciones legales o resolver disputas. Los usuarios pueden solicitar
            la eliminación de la cuenta en la app desde <strong>Ajustes → Eliminar cuenta</strong> o contactando con soporte.
          </p>
        </Section>
        <Section title="Contacto">
          <p className="text-base leading-relaxed">
            Preguntas de privacidad y solicitudes de eliminación:{' '}
            <a href="mailto:support@betmund.com" className="text-[#3A12A3] font-semibold hover:underline">
              support@betmund.com
            </a>
          </p>
        </Section>
      </LegalPage>
    )
  }

  return (
    <LegalPage title="Privacy Policy" lastUpdated="28 May 2026" lang="en">
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
