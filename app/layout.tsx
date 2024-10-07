import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/context/theme-provider';
import { MenuProvider } from '@/context/menu-provider';
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import Navigation from '@/components/navigation/Navigation';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/footer/Footer';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';


const bric = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://keanghor.vercel.app"),
  title: {
    default: "Heng Keanghor",
    template: "%s | Keanghor"
  },
  description: "As a frontend developer specializing in React.js and Next.js, I create seamless, dynamic web experiences by integrating various technologies. Enjoy browsing through my projects without interruptions.",
  twitter: {
    card: "summary_large_image"
  },
  keywords: ["technology", "health", "travel", "guides", "culture", "lifestyle", "heng keanghor", "heng enghour", "enghour", "keanghor"],
  authors: {
    name: "Keanghor",
  },
  verification: {
    google: "", //verification id
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(bric.className, "relative bg-background")}>
        <MenuProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider delayDuration={0}>
              <div className='overflow-x-hidden h-screen scrollbar-hide w-full mx-auto max-w-[1820px]'>
                <div className="relative flex w-full justify-center gap-4 p-4">

                  <div className="hidden w-full md:block md:max-w-[380px] xl:max-w-[466px]">
                    <Sidebar />
                  </div>

                  <div className="mx-auto w-full max-w-[760px] space-y-4 md:min-w-[600px] md:max-w-full xl:min-w-[850px] xxl:min-w-[1075px]">
                    <Header />
                    <div className="flex w-full basis-[60%] flex-col gap-6 relative">
                      <Card className='main-card backdrop-blur-sm'>
                        {children}
                      </Card>
                    </div>
                    <Footer />
                  </div>

                  {/* Navigation */}
                  <div className="hidden lg:block">
                    <Navigation />
                  </div>

                </div>
                <Toaster />
              </div>
            </TooltipProvider>
          </ThemeProvider>
        </MenuProvider>
      </body>
    </html>

  );
}
