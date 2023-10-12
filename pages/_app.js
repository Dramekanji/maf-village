import RoomProvider from "@/context/RoomContext";
import Navbar from "@/components/Navbar";
import "react-datepicker/dist/react-datepicker.css"; // Import these styles before globals.css
import "../datepicker.css"; // Import these styles before globals.css
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
