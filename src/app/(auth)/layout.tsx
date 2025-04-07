export const metadata = {
  title: "Accounting and Bookkeeping Services For USA Businesses",
  description:
    "AccountingsZone USA provides professional bookkeeping and accounting services for businesses, specializing in QuickBooks, tax compliance, payroll, and financial planning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
