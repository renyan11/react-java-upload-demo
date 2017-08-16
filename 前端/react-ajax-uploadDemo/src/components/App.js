'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Http from './http.js'

//固定格式和后台约定好url格式
const URL = 'http://localhost:8080/fileuploadExample/UploadServlet';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            uploadedFile : '',
            uploadedFileGetUrl : ''
        };
    }

    //回调
    callback(result) {
        this.setState({
            uploadedFile:result.uploadedFile,
            uploadedFileGetUrl:result.uploadedFileGetUrl
        });
    }

    error() {
        alert('error');
    }

    handleImageUpload(e) {
        console.info(e);
        e.preventDefault();
        let file = e.target;
        Http.post(URL,file,this.callback.bind(this),this.error);
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.handleImageUpload.bind(this)}/>
                <div>
                    {
                        this.state.uploadedFileGetUrl === '' ? null : 
                        <div>
                            <p>{this.state.uploadedFile}</p>
                            <img style={{width:500,height:500}} src={this.state.uploadedFileGetUrl} alt="你选择的图片"/>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default App
