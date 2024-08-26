import ReactDOM from "react-dom/client";
import { Providers } from "./providers/Providers";

import "./styles/index.scss";
import "shared/config/i18n/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(<Providers />);
