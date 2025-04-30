import { Toaster } from "react-hot-toast";
import Main from "./_components/Main";
import Header from "./_components/Header";
import ContactModal from "./_components/ContactModal";

function page() {
  return (
    <>
      <Main />
      <Toaster />
    </>
  );
}

export default page;
