import React, {Component} from 'react';
import './App.css';
import Content from './components/Content';

class App extends Component {
  constructor(){
    super();
    this.Item=[
      {
        id:1,
        srcImage: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/345/565/articles/lisa-moonshot-creampaint-lightfit-air-3.jpg?v=1568118467007',
        name: 'Lisa',
        info: 'sinh ngày 27 tháng 3 năm 1997, là một nữ ca sĩ, vũ công người Thái Lan. Cô là thành viên của nhóm nhạc nữ Hàn Quốc Blackpink .'
      },
      {
        id:2,
        srcImage:'https://image3.tienphong.vn/665x449/uploads/2020/01/5e1ed9307d972-jennie-kim-photoshoot-for-adidas-2019-03-600x450.jpg',
        name: 'Jennie',
        info: 'sinh ngày 16 tháng 1 năm 1996, là một nữ ca sĩ, rapper người Hàn Quốc. Cô đã ra mắt với vai trò rapper chính của nhóm nhạc Black Pink'
      },
      {
        id:3,
        srcImage: 'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
        name: 'Rose',
        info: 'sinh ngày 11 tháng 2 năm 1997), là một nữ ca sĩ người New Zealand gốc Hàn Quốc, thành viên nhóm nhạc nữ Black Pink '
      },
      {
        id:4,
        srcImage: 'https://file.tinnhac.com/resize/600x-/music/2017/11/20/blackpink-jisoo-fc05.jpg',
        name: 'Jisoo',
        info: 'sinh ngày 3 tháng 1 năm 1995), là một nữ ca sĩ thần tượng, diễn viên, người mẫu, MC người Hàn Quốc. Cô là thành viên nhóm nhạc Black Pink'
      }
    ]
  }
  render(){
    return (
      <div className="d-flex App">
       {this.Item.map((item,index) => <Content key={index} srcImage={item.srcImage} name={item.name} info={item.info}/>)}
      </div>
    );
  }
}


export default App;
