"use client";

import { AuthContextProvider} from "./_utils/auth-context";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <html>
        <body>
            <AuthContextProvider>
                <Navbar />
                {children}
            </AuthContextProvider>
        </body>
    </html>
  );
};
 
export default Layout;