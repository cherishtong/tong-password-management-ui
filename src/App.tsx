import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

import { type CSSObject, Global } from '@emotion/react';
import { createAppTheme, createAppStylesBaseline,Text } from '@arwes/react';

const theme = createAppTheme();
const stylesBaseline = createAppStylesBaseline(theme);

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
      <>
          <Global styles={stylesBaseline as Record<string, CSSObject>} />
          <Text style={{ color: '#ddd' }}>
              Nemo enim ipsam <b>voluptatem quia voluptas</b> sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, <b>adipisci velit, <i>sed quia non</i></b>
              numquam eius modi tempora incidunt ut labore et dolore magnam
              <span><a href='#'>aliquam quaerat</a></span> voluptatem. Ut enim ad minima
              veniam, qui nostrum exercitationem ullam corporis suscipit.
          </Text>
      </>
  );
}

export default App;
