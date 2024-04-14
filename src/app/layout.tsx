'use client';
import "./globals.css";
// import Header from "./(components)/Header";
// import Footer from "./(components)/Footer";
// import { InriaRegular } from "./(fonts)/font";
import { usePathname } from "next/navigation";
import SplashScreen from "../components/splashScreen";
import { useEffect, useState } from "react";
// import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeProvider } from "next-themes";
import { auth } from "@/dbConfig/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// const inter: Inter = Inter({ subsets: ["latin"] });

// export const metadata: { title: string; description: string } = {
//   title: "Me and You",
//   description: "Conversations that heal",
// };

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props): JSX.Element {
  const pathname: string = usePathname();
  const isHome: boolean = pathname === "/";
  const [isLoading, setIsLoading] = useState<boolean>(isHome);
  const [user, loading, error] = useAuthState(auth)

  // if (user) {
  //   return <div>User</div>
  // }

  // useEffect(() => {

  //   if (isLoading) {
  //     return;
  //   }
  // }, [isLoading]);

  return (
    <html lang="en">
      <body>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>{children}</>

        )}
        {/* </ThemeProvider> */}

      </body>
    </html>
  );
}
