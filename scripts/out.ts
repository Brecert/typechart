import { html } from "https://cdn.skypack.dev/lit-ntml?dts";
import { GENERATED_HTML } from "./generate.tsx";

const document = await html`
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Recaman's Sequence</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" href="./lib/normalize.css" />
    <link rel="stylesheet" href="./style.css" />
    <link rel="stylesheet" href="./pokemon.css" />
  </head>
  <body>
    <main>
      <div title="chart legend">
        <p>Chart Legend</p>
        <dl class="chart-legend">
          <dt>0</dt>
          <dd>No effect</dd>
          <dt>1</dt>
          <dd>Normal</dd>
          <dt>2</dt>
          <dd>Super effective</dd>
          <dt>½</dt>
          <dd>Not very effective</dd>
        </dl>
      </div>
      ${GENERATED_HTML}
    </main>
  </body>
</html>
`;

Deno.writeTextFileSync("index.html", document);
