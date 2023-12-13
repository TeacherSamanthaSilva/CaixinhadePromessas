const quotes = [
    {
      quote: "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais. ",
      bible: "Jeremias 29:11",
    },
    {
      quote: "Disse-lhe Jesus: Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá",

      author: "João 11:25",
    },
    {
      quote: "²⁴ Fiel é o que vos chama, o qual também o fará. ",
      bible: " 1 Tessalonicenses 5:24",
    },
    {
      quote:
        "⁸ Porque o exercício corporal para pouco aproveita, mas a piedade para tudo é proveitosa, tendo a promessa da vida presente e da que há de vir. ",
      bible: " 1 Timóteo 4:8",
    },
    {
      quote: "⁵ O que vencer será vestido de vestes brancas, e de maneira nenhuma riscarei o seu nome do livro da vida; e confessarei o seu nome diante de meu Pai e diante dos seus anjos.",
      bible: "Apocalipse 3:5",
    },
    {
      quote:
        "¹⁶ Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. ",
      bible: " João 3:16",
    },
    {
      quote:
        "⁴ Pelas quais ele nos tem dado grandíssimas e preciosas promessas, para que por elas fiqueis participantes da natureza divina, havendo escapado da corrupção, que pela concupiscência há no mundo. ",
      bible: "  2 Pedro 1:4",
    },
    {
      quote:
        "⁷ Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á. ",
      bible: "   Mateus 7:7",
    },
    {
      quote: "¹⁵ E por isso é Mediador de um novo testamento, para que, intervindo a morte para remissão das transgressões que havia debaixo do primeiro testamento, os chamados recebam a promessa da herança eterna ",
      bible: "  Hebreus 9:15",
    },
    {
      quote:
        "¹⁰ E o Deus de toda a graça, que em Cristo Jesus nos chamou à sua eterna glória, depois de havemos padecido um pouco, ele mesmo vos aperfeiçoe, confirme, fortifique e estabeleça. ",
      bible: "1 Pedro",
    },
  ];
  
  const quoteBtn = document.getElementById("quoteBtn");
  const quoteText = document.querySelector(".quote .text");
  const quoteAuthor = document.querySelector(".quote .bible");
  
  function getQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[index].quote;
    quoteAuthor.textContent = "- " + quotes[index].author;
  }
  
  quoteBtn.addEventListener("click", getQuote);