var React=require("react");
var GetDbData2=require("./GetDbData2.js");
var GetDbData1 = React.createClass({
  render: function() {

    var allRows = this.props.data.map(function(alldata) {
      return(<GetDbData2 allGmail={alldata}  key={alldata._id}/>);
    });
    return (
      <div className="panel-body">
      <table className="table table-bordered table-inverse" >
      <tbody>{allRows}</tbody>
      </table>
      </div>
    );
  }
});
module.exports=GetDbData1;
