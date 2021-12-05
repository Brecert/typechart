import { GENERATED_HTML } from "./generate.tsx";

const document = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Pokémon Generation VI+ type chart</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="data:" rel="icon">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="./pokemon.css">
  </head>
  <body>
    <main>
      <div title="type effectiveness legend">
        <p>Type Effectiveness Legend</p>
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
`.trim();

Deno.writeTextFileSync("index.html", document);
