import type { Metadata } from "next";
import Providers from "./providers";
import "@/styles/globals.css";

// i18n
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
    title: "Next.js Boilerplate by JasurCoder",
    description: "A professional Next.js Boilerplate by JasurCoder",
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);
    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider>
                    <Providers>{children}</Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
