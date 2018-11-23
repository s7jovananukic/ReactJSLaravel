import React, {Component} from 'react';

class CreateItem extends Component {
    render() {
        return (
            <div className="container">
                <h1>Create An Item</h1>
                <div className='item-block'>
                    <form onSubmit={this.handleSubmit}>

                                <div className="form-group">
                                    <label>Item Name:</label>
                                    <input type="text" className="form-control" onChange={this.handleChange1}/>
                                </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Item Price:</label>
                                    <input type="text" className="form-control col-md-6" onChange={this.handleChange2}/>
                                </div>
                            </div>
                        </div><br />
                        <div className="form-group">
                            <button className="btn btn-primary">Add Item</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default CreateItem;