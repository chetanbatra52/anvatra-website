export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "ANVATRA Technologies",

    url: "https://anvatra.com",

    logo: "https://anvatra.com/branding/logo.png",

    description:
      "ANVATRA partners with growing businesses to build exceptional technology teams through trusted permanent hiring.",

    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@anvatra.com",
      contactType: "Customer Support",
      availableLanguage: "English",
    },

    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}