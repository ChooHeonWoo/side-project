import "./Home.css";
import SvgComponent from "./SvgComponent";
const Home = () => {
  return (
    <div className="home">
      <p className="home_intro">
        산타자는 당신에게 맞는 등산코스를 추천해주는 서비스입니다.
      </p>
      <form className="home_form">
        <div className="home_form_citySelectBox">
          거주 지역을 선택해주세요
          <select>
            <option value="서울">서울</option>
            <option value="경기">경기</option>
            <option value="강원">강원</option>
            <option value="충청">충청</option>
            <option value="전라">전라</option>
            <option value="경상">경상</option>
            <option value="제주">제주</option>
          </select>
        </div>
      </form>
      <button className="home_startBtn">시작하기</button>
      <SvgComponent width="400" height="500" />
    </div>
  );
};

export default Home;
