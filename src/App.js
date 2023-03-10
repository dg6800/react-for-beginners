import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState(""); //2
  const onChange = (e) => setTodo(e.target.value); //3
  console.log("변하는 입력값:", todo);
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("서밋된 입력값", todo);
  //   if (todo === "") {
  //     //todo가 비어있으면 그냥 리턴, kill the function
  //     return;
  //   }
  //   setTodo(""); //그리고 서밋한담에 인풋을 비우고 싶으니, setTodo
  // };
  return (
    <div>
      <form>
        <input
          onChange={onChange} //3
          value={todo} //2
          type="text" //1
          placeholder="writing your to do..." //1
        />
        <button>Add To Do</button>
      </form>
      {todo}
    </div>
  );
}
export default App;

/*
1. 인풋을 만든다 속성은 
          type="text"
          placeholder="writing your to do..."
2. 어떻게 인풋값을 컨트롤 할것인가..useState 기본값은 빈 string, 변하는 입력값(todo)을 받고,
 수정하는 함수는 setTodo. 인풋 속성에 value={todo} 추가
3. 변하는 입력값을 컨트롤 하기위해, onChange 이벤트 만들기. event.target.value는 새로수정토록 setTodo.
 인풋 속성에도 onChange={onChange} 추가
이 함수는 event를 받을거고, 이벤트의 타켓은 인풋값(value), setTodo로 설정.
console.log("변하는 입력값:", todo) 해서, 입력값(value)인 todo가 state에 나오는것을 확인
4. 인풋태그를 form tag안에 넣는다. form안에 add버튼을 추가로 넣는다.
버튼을 클릭하면 폼태그는 서밋이벤트를 발생시키도록 연결.
폼안에 버튼이 한개있고 그 버튼은 폼을 서밋 하도록 만들거.

*/
