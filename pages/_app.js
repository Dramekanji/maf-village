import RoomProvider from "@/context/RoomContext";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <RoomProvider>
      <Navbar />
      <Component {...pageProps} />
    </RoomProvider>
  );
}

export default MyApp;
