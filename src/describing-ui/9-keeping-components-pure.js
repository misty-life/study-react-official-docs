// 순수 함수
// 1. 같은 입력에 대해서는 같은 출력
// 2. 자신의 일에 집중, 함수가 호출되기 전의 변수나 객체를 변경하지 않음

// 리액트에서는 모든 컴포넌트가 순수 함수라고 가정한다.
// 순수성을 신경 쓰는 이유는 입력이 변하지 않은 컴포넌트는 다시 렌더링 하지 않고 캐싱

function Recipe({ drinkers }) {
    return (
        <ol>
            <li>Boil {drinkers} cups of water.</li>
            <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
            <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
        </ol>
    );
}

export default function App() {
    return (
        <section>
            <h1>Spiced Chai Recipe</h1>
            <h2>For two</h2>
            <Recipe drinkers={2} />
            <h2>For a gathering</h2>
            <Recipe drinkers={4} />
        </section>
    );
}