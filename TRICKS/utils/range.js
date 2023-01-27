// range() is essentially the expression version of a “for” loop statement, like how && can be an expression version of an “if” statement. This means we can use it in our JSX.

const range = (start, end, step = 1) => {
    let output = [];
  
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
  
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
  
    return output;
  };

  // Create an array from 0 (inclusive) to 2 (exclusive):
range(2);
// Produces: [0, 1]

// Create an array from 0 (inclusive) to 5 (exclusive):
range(5);
// Produces: [0, 1, 2, 3, 4]

// Create an array from 2 (inclusive) to 6 (exclusive):
range(2, 6);
// Produces: [2, 3, 4, 5]

// Create an array from 2 to 10, picking every 2nd number
range(2, 10, 2);
// Produces: [2, 4, 6, 8]

// range() in action:

// https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/08-range-util

function StarRating({ rating }) {
    return (
      <div className="star-wrapper">
        {range(rating).map((num) => (
          <img
            key={num}
            alt=""
            className="gold-star"
            src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
          />
        ))}
      </div>
    );
  }