// UI 처리 단계
// 1. 렌더링 트리거
// 2. 컴포넌트 렌더링
// 3. DOM에 커밋

// 렌더링 트리거
// 1. 초기 렌더링
// const root = createRoot(document.getElementById('root'));
// root.render(컴포넌트);
// 2. State가 업데이트 되는 경우

// 컴포넌트 렌더링, 렌더링이란 리액트에서 컴포넌트를 호출하는 것
// 1. 초기 렌더링 -> 루트 컴포넌트 호출
// 2. State 업데이트 -> 렌더링 트리거한 컴포넌트 호출

// DOM에 커밋
// 1. 초기 렌더링 -> appendChild() DOM API로 DOM 노드를 화면에 표시
// 2. 리렌더링 -> 필요한 최소한의 작업만 적용

// 매초 time이 바뀌지만 input의 value는 초기화 되지 않음
// 렌더링간에 변경된 부분만 다시 그리기 떄문에
export default function Clock({ time }) {
    return (
      <>
        <h1>{time}</h1>
        <input />
      </>
    );
  }  
