import { useState } from "react";
import { Content, Header, Info, StyledText, Title } from "./styled";
import { shuffleWord } from "./shuffleWord";

function Form() {
  const [originalText, setOriginalText] = useState("");
  const [processedText, setProcessedText] = useState("");

  const processText = (text) =>
    text.replace(/([a-ząćęłńóśźż]+)/gi, (word) => shuffleWord(word));

  const uploadFile = ({ target }) => {
    const file = target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = ({ target }) => {
      const text = target.result;
      setOriginalText(text);
      setProcessedText(processText(text));
    };
    reader.readAsText(file, "UTF-8");
  };

  return (
    <form>
      <Header>Formularz pszekształcenia tekstu</Header>
      <Info>
        <Title>Tylko plik .txt</Title>
        <input type="file" accept=".txt" onChange={uploadFile} />
      </Info>
      {originalText && (
        <Content>
          <h2>Oryginalny tekst:</h2>
          <StyledText>{originalText}</StyledText>
          <h2>Przekształcony tekst:</h2>
          <StyledText $processed>{processedText}</StyledText>
        </Content>
      )}
    </form>
  );
}

export default Form;
