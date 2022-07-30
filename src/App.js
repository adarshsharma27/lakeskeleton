import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../src/components/Header";
import Cards from "./components/Cards";
import data from "./components/data";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            paper: "rgb(34, 43, 69)",
        },
    },
});
function App() {
    const [info] = useState(data);
    const [infoCopy, setInfoCopy] = useState([]);
    const setSearch = (e) => {
        const getResults = e.toLowerCase();
        if (getResults === "") {
            setInfoCopy(info);
        } else {
            const filterData = infoCopy.filter((element) => {
                return element.title.toLowerCase().match(getResults);
            });
            setInfoCopy(filterData);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setInfoCopy(info);
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <Header setSearch={setSearch} />
                {<Cards infoCopy={infoCopy} info={info} />}
            </ThemeProvider>
        </>
    );
}

export default App;
