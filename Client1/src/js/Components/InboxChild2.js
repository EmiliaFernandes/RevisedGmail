var React=require("react");
var saveMessage = React.createClass({
    getInitialState: function() {
      return {data: []};
    },
    /*FUNCTION FOR LABELS*/
    allLabels: function()
    {
      var accessToken = localStorage.getItem('gToken');
      $.ajax({
        url: 'http://localhost:8080/savemessage',
        dataType: 'json',
        type: 'POST',
        data:{From:this.props.from1,Subject:this.props.subject ,date:this.props.date },
        success: function(data)
        {
          this.setState({data:data.labels});
          console.log(data);
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(err.toString());
        }.bind(this)
      });
    },
    render:function(){
    return (
      <tr >
      <td><button className="btn btn-primary" onClick={this.allLabels}>Save</button></td>
      <td>{this.props.from1}</td>
      <td><a>{this.props.subject}</a></td>
      <td>{this.props.date}</td>
      </tr>
    );
  }
});
module.exports=saveMessage;
