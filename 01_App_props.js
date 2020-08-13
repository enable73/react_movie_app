import React from 'react';
import PropTypes from 'prop-types';


// 외부 폴더에 컴포넌트 파일을 만들 수도 있지만 학습 편의성 위해서 내부에
// Movie_list 컴포넌트의 propos를 name으로 만들어서 사용하는 
function Movie(props){          //props를 argument로 사용
  console.log("컴퍼넌트의 props", props);
  return (
      <div> 
        <h1> My favorite movie is  {props.name}  </h1> 
        <h4>{props.feedback}</h4>
        <img src = {props.poster_image} alt = {props.name}/> 
      </div>
  )};

//propos 값과 상태를 체크하고 디버그에 도움을 주는 라이브러리 propTypes
Movie.propTypes = {
  name : PropTypes.string.isRequired,
  poster_image : PropTypes.string.isRequired,
  feedback : PropTypes.number.isRequired,
};


//map에서 사용할 함수 
function render_map(data){
  console.log("map 오브젝트 데이터",data);
  return <Movie key = {data.id} name = {data.name} poster_image = {data.image_url} feedback={data.rating}/>
};

//array를 이용해서 동적 데이터 가공 연습
//단, 리액트 엘리멘트에서 가공을 할 때에 유니크한 key propos 값을 요구하기 때문에 각 어레이 데이터 마다 id 값을 넣는다
const movie_list = [
  { 
    id : 1,
    name : "batman",
    rating : 2.4,
    image_url : "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/e1a5dba7-Batman-Dark-Flight/%EB%A7%88%EC%B9%B4%EC%98%A4%EB%B0%B0%ED%8A%B8%EB%A7%A8%EB%8B%A4%ED%81%AC%ED%94%8C%EB%9D%BC%EC%9D%B4%ED%8A%B8%ED%8B%B0%EC%BC%93.jpg"
},
{
    id : 2,  
    name : "ironman",
    rating : 5.7,
    image_url : "https://assets1.ignimgs.com/2019/04/01/ironmanvr-blogroll-1554158268175.jpg?width=1280"
},
{
    id : 3,
    name : "superman",
    rating : 1,
    image_url : "https://i.guim.co.uk/img/media/fb18c7fae89eba7df3adc05dd73868c9919e3abb/0_131_4000_2400/master/4000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ec9617bbb167fce941f33c09ae4937a3"
}
];



// 컴포넌트들을 호출해서 조립
// 중요 아래의 data는 오브젝트 이다. movie_list 어레이에서 차례대로 받아서 만들어지는 오브젝트이다.
// 일반 자바스크립트 처럼 오브젝트 내에서도 object.name, object.image를 갖고 있는 것이다.
function App() {
  return (
    <div>
      {movie_list.map(render_map)}
      {console.log("리액트 오브젝트", movie_list.map(render_map))}
    </div>
  )
}

export default App;


