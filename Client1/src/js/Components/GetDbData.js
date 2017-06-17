var React=require("react");
var GetDbData1=require('./GetDbData1');
var GetDbData = React.createClass({
  /*INITIAL STATE*/
  getInitialState: function() {
    return {gmailData: []};
  },
  /*LOGIN FUNCTION*/
  getMessage: function()
  {
  //  var accessToken = localStorage.getItem('gToken');
    $.ajax({
      url: 'http://localhost:8080/savemessage',
      dataType: 'json',
      type: 'GET',
      success: function(data)
      {
        this.setState({gmailData:data});
        console.log(this.state.gmailData);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function(){
    this.getMessage();
  },
  render:function(){
    return(
      <div>
      <GetDbData1 data={this.state.gmailData}/>
      </div>
    )
  }
})
module.exports=GetDbData;
