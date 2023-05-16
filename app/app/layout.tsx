import { PrivateLayout } from "../../components/layout/privateLayout";

export const metadata = {
  title: "OnBoard",
  description: "Assoc - Technlogic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PrivateLayout>{children}</PrivateLayout>;
}
