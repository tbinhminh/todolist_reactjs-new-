import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="col-md-6">
              <div className="input-group mb-3">
                <input type="text" className="form-control mr-2" placeholder="Nhập từ khóa..." />
                <button type="button" className="btn btn-primary">Tim kiem</button>
              </div>
            </div>
        );
    }
}

export default Search;