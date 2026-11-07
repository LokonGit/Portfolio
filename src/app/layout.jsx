import "./globals.css";

const title = "Lokesh Saraswat | Portfolio";
const description =
  "Portfolio of Lokesh Saraswat, a Full-Stack Developer and Bachelors student at IIT Roorkee. Explore my projects, skills and experience in an interactive 3D space.";

export const metadata = {
  title,
  description,
  applicationName: title,
  authors: [{ name: "Lokesh Saraswat" }],
  creator: "Lokesh Saraswat",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  openGraph: {
    title,
    description,
    siteName: title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Critical assets of the startup screen */}
        <link
          rel="preload"
          href="/assets/pictures/startup_screen_background.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/assets/fonts/Space_Grotesk.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Shown before the app (and its CSS) loads */}
        <style>{`html,body{margin:0;background:#09090b;color:#fafafa;}`}</style>
      </head>
      <body>
        <noscript>
          <div
            style={{
              minHeight: "100vh",
              display: "grid",
              placeItems: "center",
              fontFamily: "system-ui, sans-serif",
              textAlign: "center",
              padding: "1rem",
            }}
          >
            <p>This 3D portfolio needs JavaScript.</p>
          </div>
        </noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
