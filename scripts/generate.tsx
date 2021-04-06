import h from "https://cdn.skypack.dev/vhtml?dts";
import { table } from "./typetable.ts";

const React = { createElement: h };

const typeClass = (type: string) => `type-${type.toLowerCase()}`;

const fraction = ["0", "1", "2", "½"];

const style = [
  "no-effect",
  "effective",
  "super-effective",
  "not-very-effective",
];

const title = [
  "has no effect",
  "is effective",
  "is super effective",
  "is not very effective",
];

export const GENERATED_HTML = (
  <table class="type-table text-center">
    <caption>Pokémon Generation VI+ type chart</caption>
    <thead>
      <th>×</th>
      {table[0].map((type) => (
        <th class={typeClass(type)} data-i-type={type}>
          <span>{type}</span>
        </th>
      ))}
    </thead>
    <tbody>
      {table[0].map((type, i) => {
        const row = table[i + 1] as number[];

        return (
          <tr>
            <th class={typeClass(type)} scope="row">
              <span>{type}</span>
            </th>
            {row.map((val, ti) => (
              <td
                title={`${type} ${title[val as number]} against ${
                  table[0][ti]
                }`}
                class={style[val as number]}
              >
                {fraction[val as number]}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  </table>
);
