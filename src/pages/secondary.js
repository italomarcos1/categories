import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import Container, { Option, Button, Header } from "./_styles";

import { secondary } from "../data/att2";

export default function Home() {
  const [data, setData] = useState(() => {
    const formattedData = secondary.map((d) => {
      const formattedValue = d.values.map((v) => {
        return { ...v, value: false };
      });

      return { ...d, values: formattedValue };
    });

    return formattedData;
  }, []);

  const handleSetData = useCallback(
    (category, index) => {
      const { values } = data[category];
      const currentOption = values[index];

      const updatedOption = {
        ...currentOption,
        value: !currentOption.value,
      };

      const formattedData = [...data];
      formattedData[category].values = values.map((v) =>
        v.key === updatedOption.key ? updatedOption : v
      );

      setData(formattedData);
    },
    [data]
  );

  useEffect(() => {
    let final = {};

    data.forEach((d) => {
      final[d.name.toLowerCase()] = d.values.filter((c) => !!c.value);
    });

    console.log("final", final);
  }, [data]);

  return (
    <>
      <Header>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/secondary">
            <a>Secondary</a>
          </Link>
          <Link href="/tertiary">
            <a>Tertiary</a>
          </Link>
        </div>
      </Header>
      <Container>
        {data.map((d, category) => (
          <Option key={d.name}>
            <strong>{d.name}</strong>
            {d.values.map((v, index) => (
              <Button
                key={v.key}
                onClick={() => handleSetData(category, index)}
                selected={v.value}
              >
                {v.name}
              </Button>
            ))}
          </Option>
        ))}
      </Container>
    </>
  );
}
