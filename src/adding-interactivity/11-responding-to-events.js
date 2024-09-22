// 이벤트 핸들러 함수는 주로 컴포넌트 내부에서 정의
// handle이벤트명 형태로 주로 네이밍

// 디자인 시스템을 사용한다면, UI 관련 속성만 만들고 이벤트는 해당 컴포넌트를 이용하는 부모에서 전달해주는 방식이 있음.
function Button({ onClick, children }) {
    return (
        <button onClick={e => {
            // e.preventDefault(); // 특정 이벤트의 기본 동작을 방지
            e.stopPropagation(); // 이벤트 버블링 제어
            onClick();
        }}>
            {children}
        </button>
    );
}

function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}`);
    }

    return (
        <Button onClick={handlePlayClick}>
            Play "{movieName}"
        </Button>
    );
}

function UploadButton() {
    return (
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    );
}

function AlertButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <div>
            <div className="Toolbar" onClick={() => {
                alert('You clicked on the toolbar!');
            }}>
                <Button onClick={() => alert('Playing!')}>
                    Play Movie
                </Button>
                <Button onClick={() => alert('Uploading!')}>
                    Upload Image
                </Button>
            </div>
            <br />
            <PlayButton movieName="Kiki's Delivery Service" />
            <UploadButton />
            <br />
            <AlertButton message="Playing!">
                Play Movie
            </AlertButton>
            <AlertButton message={"Uploading!"}>
                Upload Image
            </AlertButton>
        </div>
    );
}