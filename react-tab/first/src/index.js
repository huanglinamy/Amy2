import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva(); //初始化一个dva的实例

// 2. Plugins
// app.use({});  //插件

// 3. Model
// app.model(require('./models/example').default);  //挂载下model
app.model(require('./models/index').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');  //挂载到root
