import React from "react";

import Container from "components/Container";
import capitalize from "utils/capitalize";

interface Props {
  name: string;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  goBack(): void;
}

const Stats: React.FC<Props> = ({ name, stats = [], goBack }) => {
  return (
    <Container>
      <div className="w-80 max-w-full">
        <div className="flex items-center">
          <button onClick={goBack} className="mr-6 text-5xl font-black">
            &#x2190;
          </button>
          <h1 className="text-3xl font-semibold">{capitalize(name)}</h1>
        </div>
        <table className="my-4 px-2 w-full">
          {stats.map((item) => (
            <tr className="flex justify-between w-full" key={item.stat.name}>
              <td className="font-semibold mr-4">{item.stat.name}</td>
              <td>{item.base_stat}</td>
            </tr>
          ))}
        </table>
      </div>
    </Container>
  );
};

export default Stats;
