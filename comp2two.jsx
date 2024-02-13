import React from 'react';

function MyQuote() {
    return (
    	<blockquote>
  			<p>
    			What is important now is to recover our senses.
  			</p>
  			<cite>
    		  <a target="_blank" href="https://en.wikipedia.org/wiki/Susan_Sontag">
      	    Susan Sontag
    		  </a>
  			</cite>
			</blockquote>
    );
};
function Cite(){
  return (<p>hello cite app here !!!</p>);
}
export default Cite;
// #component name must start with upper case
export default MyQuote;
