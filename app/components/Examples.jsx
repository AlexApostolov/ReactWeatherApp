var React = require('react');
var { Link } = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Boca Raton">Boca Raton, FL</Link>
        </li>
        <li>
          <Link to="/?location=New York">New York, NY</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
