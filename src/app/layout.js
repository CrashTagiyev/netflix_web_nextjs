
export const metadata = {
  title: "Netflix NextJs Front-end",
  description: "A NextJs application that inspired from the netflix website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex-1 ">
        {children}
      </body>
    </html>
  );
}
