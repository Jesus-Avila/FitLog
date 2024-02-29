import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "./ui/bottom-nav";
import TopSafeArea from "./ui/topsafearea";
import { poppins } from "./ui/fonts";


export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout tracker app",
  icons: {
    icon: '/icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <TopSafeArea /> */}
        {children}
        <BottomNav />
      </body>
    </html>
  );
}



// export default function Layout ({ children }: { children: React.ReactNode }) {
//     return (
//         <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
//             <div className="w-full flex-none md:w-64">
//                 <SideNav />
//             </div>
//             <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
//         </div>
//     )
// }