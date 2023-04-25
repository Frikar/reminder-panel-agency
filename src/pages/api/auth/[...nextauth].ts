import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook";

const clientId: string = (process.env.GITHUB_ID as string) || "";
const clientSecret: string = (process.env.GITHUB_SECRET as string) || "";
const clientIdFacebook: string = (process.env.FACEBOOK_CLIENT_ID as string) || "";
const clientSecretFacebook: string = (process.env.FACEBOOK_CLIENT_SECRET as string) || "";

export const authOptions: NextAuthOptions = {
	providers: [
		FacebookProvider({
			clientId: clientIdFacebook,
			clientSecret: clientSecretFacebook,
		}),
		GithubProvider({
			clientId: clientId,
			clientSecret: clientSecret,
		}),
	],
	callbacks: {
		async signIn({user, account, profile, email, credentials}) {
			if (account?.provider === 'facebook') {
				user.name = profile?.name
				// @ts-ignore
				user.image = profile?.picture.data.url
			} else {
				user.name = "Test User"
				user.image = "https://www.gravatar.com/avatar/testuser?d=identicon&s=200"
			}
			return true
		},
	}
}
export default NextAuth(authOptions)

