import './App.css';

function App() {
  const jsx = 'JSX';
  return (
    <>
      <h1 className='red'>Hello React!</h1>
      <h2 className='blue'>컴포넌트 필수 요건</h2>
      <ol>
        <li>대문자로 함수를 만들것</li>
        <li>{jsx}를 반환할 것</li>
      </ol>
      <h2 className='blue'>{jsx} 주의사항 3가지</h2>
      <ol>
        <li>
          컴포넌트는 꼭 하나의 태그만 반환해야한다. 다수의 태그를 반환하고
          싶다면 꼭 부모 태그로 감싸야한다.
        </li>
        <li>클래스를 사용할때에는 className 을 사용해야한다.</li>
        <li>
          자바스크립트 코드도 작성이 가능하다. 다만 자바스크립트 코드를
          작성할때는 {} 중괄호로 묶어줘야 한다.
        </li>
      </ol>
      <img
        alt='리액트사진'
        style={{ width: 700, height: 500 }}
        src='https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
      ></img>
    </>
  );
}

export default App;
