// JSX : Javascript 확장 문법으로 리액트와 별개

// JSX Rules
// 1. 하나의 루트 엘리먼트로 반환
// 2. 모든 태그는 명시적으로 닫아야함
// 3. Camel Case

// JSX는 JS 객체로 변환되고, attributes는 객체의 Key로 변환된다.

export default function TodoList() {
    return (
        <>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </>
    );
}