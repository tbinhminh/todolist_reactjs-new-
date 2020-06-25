import React, { Component } from 'react';
import Search from '../Search/Search';

class Controls extends Component {
    render() {
        return (
            <div className="row mt-3">
            <Search></Search>
            <div className="col-md-6">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sap xep
                </button>
                <div className="dropdown-menu" aria-labelledby="triggerId">
                  {/* <a className="dropdown-item"  href="/">Ten A -&gt; Z</a>
                  <a className="dropdown-item " href="/" >Ten Z -&gt; A</a>
                  <a className="dropdown-item"  href="/">Trạng Thái Kích Hoạt</a>
                  <a className="dropdown-item"  href="/">Trạng Thái Ẩn</a> */}
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Controls;