const title = "JAM Stack indie maker bootstrapping products";
const titleTemplate = "%s | Masvel";
const description =
  "I build and ship products using JAM Stack architecture. I describe the whole process in a transparent way to in order to generate passive income ultimately.";

const seoConfig = {
  title,
  titleTemplate,
  description,
  canonical: "https://masvel.io",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://masvel.io",
    title,
    description,
    images: [
      {
        url: "https://masvel.io/masvel-banner.png",
        alt: title,
        width: 1854,
        height: 596,
      },
    ],
  },
  twitter: {
    handle: "@masvelio",
    site: "@masvelio",
    cardType: "summary_large_image",
  },
};

export default seoConfig;
