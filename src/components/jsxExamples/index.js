import React from "react";
class JsxExamples extends React.Component {
   render() {
      console.log(this.props);
const string = 'text from jsx const';
const number = 7;
const title = <h3>Hi, i`m a string in JSX</h3>
      return (
         <div>
            {string}
            {number}
            <h3>
               {this.props.myFirstProp}
            </h3>
                     <div>
{this.props.surName}
         </div>
            </div>
      )
   }
}

export default JsxExamples;
