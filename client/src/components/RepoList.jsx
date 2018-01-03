import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <Repo Entry={props.repos[0]} />
  </div>
);

export default RepoList;

const Repo = function(props) {
  console.dir(props);

  let privacy;
  let timeAgo = ' ' + props.Entry.updated_at.slice(0, props.Entry.updated_at.indexOf('T'));

  if (props.Entry.private = true) {
    privacy = 'Private';
  } else {
    privacy = 'Public';
  }

  return (
    <div>
    
      <h3>
        <a href={props.Entry.full_name}>
          {props.Entry.name}      
        </a>
        <span>
          {privacy}
        </span>

        
      </h3>    
      
      <span>
          Forked from <a href={props.Entry.full_name}>{props.Entry.full_name}</a>
        </span>

      <div>
        <span ></span>
        <span>{props.Entry.coding_language}</span>
        <a  href="/storycoding/hrsf86-self-assessment-week-04-v3/network">
          <svg 
            aria-label="fork"
            height="16" role="img" version="1.1" viewBox="0 0 10 16"
            width="10"><path fillRule="evenodd"
            d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              {props.Entry.forks_count}
        </a>
        Updated on  
        <relative-time 
          datetime={timeAgo}
          title={timeAgo}>
          {timeAgo}
        </relative-time>

      </div>

    </div>
  );

} 




// replace props.private boolean with private or public

// svg needs a link to the /network

// replace relative-time component title and inner html fields with user friendly data
      // title="Jan 2, 2018, 9:58 AM PST"
      // >7 hours ago<