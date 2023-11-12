import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Topbar from "@/components/organisms/layout/topbar";
import {cookies} from "next/headers";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Repotask',
    description: 'Repository Tugas Akhir Jurusan Sistem Komputer',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const session = cookies().get('user-session')?.value


    return (
        <html lang="en">
        <body className={inter.className}>
        <Topbar session={session}/>
        <main>{children}</main>
        </body>
        </html>
    )
}
