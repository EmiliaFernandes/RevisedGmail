var React=require("react");
var GetDbData2 = React.createClass({
  render: function() {
    return (
      <tr>
      <td>{this.props.allGmail.From}</td>
      <td>{this.props.allGmail.Subject}</td>
      <td>{this.props.allGmail.date}</td>
      </tr>
    );
  }
});
module.exports=GetDbData2;
