import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import Container, { Option, Button, Header } from "./_styles";

import { primary } from "../data/att1";

export default function Home() {
  const [data, setData] = useState(() => {
    const formattedData = primary.map((d) => {
      const formattedValue = d.values.map((v) => {
        return { ...v, value: false }; // acrescentar valor que define o 'selected'
      });

      return { ...d, values: formattedValue };
    });

    console.log("formattedData", formattedData);

    return formattedData;
  }, []);

  const handleSetData = useCallback(
    (category, index) => {
      const { values } = data[category]; // pega a categoria pelo nome e desestrutura pra pegar o values
      const currentOption = values[index]; // pega a opção de dentro do array values

      const updatedOption = {
        ...currentOption,
        value: !currentOption.value, // inverte o valor, de false vai pra true e vice-versa
      };

      const formattedData = [...data];
      formattedData[category].values = values.map(
        (v) => (v.key === updatedOption.key ? updatedOption : v) // joga a opção atualizada pro estado
      );

      setData(formattedData);
    },
    [data]
  );

  useEffect(() => {
    let final = {};

    data.forEach((d) => {
      final[d.name.toLowerCase()] = d.values.filter((c) => !!c.value); // salva o array de opções em um objeto com o nome da categoria
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
