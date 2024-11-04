import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
        
        {/* Chatbot configuration and loading script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.embeddedChatbotConfig = {
                chatbotId: "-phMl0R4QhSVdVizpp-3S",
                domain: "www.chatbase.co"
              };
            `,
          }}
        />
        <script
          src="https://www.chatbase.co/embed.min.js"
          defer
        ></script>
      </body>
    </html>
  )
}
