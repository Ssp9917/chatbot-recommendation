import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";
import './App.css'

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});

// Add your Client ID here ⬇️
const clientId = "0b6a1d19-e203-4cbb-96ad-3c0fc141fe0c";

const config = {
  composerPlaceholder: "What would you like to know?",
  botName: "Chat Bot By Sonu Sharma",
  botAvatar: "/chat_bot.jpg",
  botDescription:
    "Hi! 👋  Welcome to webchat this is some description talking about what it is. This might be a bit longer when expanded.",
  email: {
    title: "sonusharma30.09.2004@gmail.com",
    link: "mailto:sonusharma30.09.2004@gmail.com",
  },
  phone: {
    title: "+91 8209950683",
    link: "tel: 8209950683",
  },
  website: {
    title: "https://botpress.com",
    link: "https://botpress.com",
  },
  termsOfService: {
    title: "Terms of service",
    link: "https://botpress.com/terms",
  },
  privacyPolicy: {
    title: "Privacy policy",
    link: "https://botpress.com/privacy",
  },
};

export default function App() {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(true);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "fixed", bottom: "0" }}>
      <style>{style}</style>
      <WebchatProvider
        key={JSON.stringify(config)}
        theme={theme}
        configuration={config}
        client={client}
      >
        {/* Webchat will always be open since we're not using the toggle button */}
        <div
          style={{
            display: isWebchatOpen ? "block" : "none",
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}
