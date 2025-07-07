import "./assets/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const peyda = localFont({
    src: [
        {
            weight: "100",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-Thin.woff2",
        },
        {
            weight: "200",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-ExtraLight.woff2",
        },
        {
            weight: "300",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-Light.woff2",
        },
        {
            weight: "400",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-Regular.woff2",
        },
        {
            weight: "500",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-Medium.woff2",
        },
        {
            weight: "600",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-SemiBold.woff2",
        },
        {
            weight: "700",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-Bold.woff2",
        },
        {
            weight: "800",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-ExtraBold.woff2",
        },
        {
            weight: "900",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-Black.woff2",
        },
    ],
    variable: "--font-peyda",
});

const iranYekanX = localFont({
    src: [
        {
            weight: "normal",
            style: "normal",
            path: "./assets/fonts/IRANYekanX/IRANYekanX-Regular.woff",
        },
        {
            weight: "bold",
            style: "normal",
            path: "./assets/fonts/IRANYekanX/IRANYekanX-Bold.woff",
        },
    ],
    variable: "--font-iran-yekan-x",
});

export const metadata: Metadata = {
    title: {
        default: "Online Menu Panel",
        template: "%s | OMP",
    },
    description: "An online menu for your favorite restaurants",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="fa-IR">
            <body
                className={`${peyda.variable} ${iranYekanX.variable} ss02
                ${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;
