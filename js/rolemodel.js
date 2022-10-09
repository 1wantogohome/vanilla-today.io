const sentences = document.getElementById("sentence");
const writers = document.getElementById("writer");

const sentence = [
    {
        sentence: "상처는 깃털처럼 날리고, 가슴엔 사랑만을 남겨라.",
        writer: "김은주"
    },
    {
        sentence: "내 언어의 한계는 곧 내 세상의 한계다.",
        writer: "비트켄슈타인"
    },
    {
        sentence: "소중한 것들은 그리 오래 머물지 않는다.",
        writer: "마당을 나온 암탉, 황선미"
    },
    {
        sentence: "지상에서 심은 씨앗 중에 가장 멀리에 심은 것이 별이다.",
        writer: "별, 박영신"
    },
    {
        sentence: "잘못은 신에게도 있다.",
        writer: "난장이가 쏘아올린 작은 공, 조세희"
    },
    {
        sentence: "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.",
        writer: "나딘 스테어"
    },
];

const randomSays = sentence[Math.floor(Math.random()*sentence.length)];

sentences.innerText = randomSays.sentence;
writers.innerText = randomSays.writer;
