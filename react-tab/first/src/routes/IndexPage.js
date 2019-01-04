//放页面的
// import React from 'react';
// import { connect } from 'dva';
// import styles from './IndexPage.css';

// function IndexPage() {  //无状态组件
//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to dva!</h1>
//       <div className={styles.welcome} />
//       <ul className={styles.list}>
//         <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
//         <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
//       </ul>
//     </div>
//   );
// }

// IndexPage.propTypes = {
// };

// export default connect()(IndexPage);

import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navdata: ['Readme', 'Dependencies', 'Dependents', 'Versions'],
      flag: 0
    }
  }

  changeTab(e) {
    this.setState({
      flag: e
    })
  }

  render() {
    let { navdata, flag } = this.state;
    let { num, changeNum } = this.props;
    return (
      <div className={styles.wrap}>
        <div className={styles.tol}>
          <span className={styles.button} onClick={() => changeNum('+')}>+</span>
          <span>{num}</span>
          <span className={styles.button} onClick={() => changeNum('-')}>-</span>
        </div>
        <div className={styles.nav}>
          {
            navdata && navdata.length && navdata.map((itm, ind) => {
              return <span onClick={() => {
                this.changeTab(ind)
              }} key={ind}>{itm}</span>
            })
          }
        </div>
        <div className={styles.navcont}>
          {
            navdata.map((itm, ind) => {
              return <p className={flag === ind ? styles.show : styles.hide} key={ind}>{itm}</p>
            })
          }
        </div>
        <div className="red1">我爱吃的红柚</div>
        <div className="red2">完成吃红柚</div>
      </div>
    );
  }
}

const mapState = state => {
  console.log('state...', state);
  let { num } = state.index;
  return {
    num
  }
}

const mapDispatch = dispatch => {
  return {
    changeNum: type => {
      dispatch({
        type: 'index/changeNum',
        payload: type
      });
      dispatch({
        type:'index/getList',
        payload:type
      })
    }
  }
}

export default connect(mapState, mapDispatch)(IndexPage);
