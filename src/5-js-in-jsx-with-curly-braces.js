const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

// JSX에서 중괄호는 태그 안에서는 동작하지 않음
// 객체도 전달 가능 {{ }}

export default function Avatar() {
    const person = {
        name: "Gregorio Y. Zara",
        avatar: "https://i.imgur.com/7vQD0fPs.jpg",
        theme: {
            backgroundColor: "green",
            color: "white",
        },
    };

    return (
        <>
            <img 
                className="avatar"
                src={person.avatar}
                alt={person.name}
            />
            <h1 style={person.theme}>Format Date : {formatDate(today)}</h1>
        </>
    );
}