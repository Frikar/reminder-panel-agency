import '../../styles/globals.css'
import type {AppProps} from 'next/app'
import {SessionProvider} from "next-auth/react"
import {Inter} from 'next/font/google'
import Layout from "@/components/Layout";

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
	return (
			<main className={`${inter.variable} font-sans`}>
				<SessionProvider session={session}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</SessionProvider>
			</main>
	)
}

export default MyApp
