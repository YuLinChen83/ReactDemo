// import React, { Component } from 'react';
// import shortid from 'shortid';

// function AboutComponent({
//   subredditData,
//   showRedditSpinner,
//   fetchSubreddits
// }) {
//   if(showRedditSpinner) { return <p>Loading...</p> }

//   return (
//     <ul>
//       {subredditData.map((data, index) => (
//         <li key={shortid.generate()}>
//           <a href={`https://reddit.com${data.url}`} target="_blank">{data.title}</a>
//         </li>
//       ))}
//       <button onClick={() => fetchSubreddits('reactjs')}>Show ReactJS subreddits</button>
//     </ul>
//   )
// }

// export default AboutComponent;