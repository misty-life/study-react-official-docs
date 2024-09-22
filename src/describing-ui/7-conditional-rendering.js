// 렌더링을 하고 싶지 않은 경우 null을 리턴할 수 있다. 흔한 케이스는 아님
function Item({ name, isPacked }) {
    // if (isPacked) {
    //     return null;
    // }

    // return <li className="item">{isPacked ? <del>{name} ✅</del> : name}</li>;

    // && 연산자는 왼쪽 값이 true 일 때, 오른쪽 값 반환
    // React는 false를 null또는 undefined 처럼 Tree의 구멍으로 간주하고, 렌더링 하지 않음
    // return <li className="item">
    //     {name} {isPacked && '✅'}
    // </li>

    let itemContent = name;
    if (isPacked) {
        itemContent += " ✅";
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item 
                    name="Space suit"
                    isPacked={true}
                />
                <Item 
                    isPacked={true} 
                    name="Helmet with a golden leaf" 
                />
                <Item 
                    isPacked={false} 
                    name="Photo of Tam" 
                />
            </ul>
        </section>
    );
}