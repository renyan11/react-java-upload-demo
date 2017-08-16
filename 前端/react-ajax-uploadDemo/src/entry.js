
'use strict';

//引入样式文件
import './styles/app.scss';

import React from 'react';
import { render } from 'react-dom';
//引入组件
import AppInfo from './components/App.js';

render(<AppInfo/>,document.getElementById('app'));
